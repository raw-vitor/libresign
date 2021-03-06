# This file is licensed under the Affero General Public License version 3 or
# later. See the LICENSE file.

# Dependencies:
# * make
# * npm
# * curl: used if phpunit and composer are not installed to fetch them from the web
# * tar: for building the archive

app_name=$(notdir $(CURDIR))
project_directory=$(CURDIR)/../$(app_name)
build_tools_directory=$(CURDIR)/build/tools
appstore_build_directory=$(CURDIR)/build/artifacts/appstore
appstore_package_name=$(appstore_build_directory)/$(app_name)
npm=$(shell which npm 2> /dev/null)
composer=$(shell which composer 2> /dev/null)

all: dev-setup build-js-production
serve: dev-setup watch-js

# a copy is fetched from the web
.PHONY: composer
composer:
ifeq (,$(composer))
	@echo "No composer command available, downloading a copy from the web"
	mkdir -p $(build_tools_directory)
	curl -sS https://getcomposer.org/installer | php
	mv composer.phar $(build_tools_directory)
	php $(build_tools_directory)/composer.phar install --prefer-dist
else
	composer install --prefer-dist
endif

# Dev env management
dev-setup: clean clean-dev composer npm-init

npm-init:
	npm ci

npm-update:
	npm update

# Building
build-js:
	npm run dev

build-js-production:
	npm run build

watch-js:
	npm run watch

# Linting
lint:
	npm run lint

lint-fix:
	npm run lint:fix
	npm run stylelint:fix

# Style linting
stylelint:
	npm run stylelint

.PHONY: docs
docs:
	./docs/node_modules/.bin/vuepress dev docs/

# Cleaning
.PHONY: clean
clean:
	rm -rf js/
	rm -rf $(appstore_build_directory)

clean-dev:
	rm -rf node_modules
	rm -rf vendor
	rm -rf $(appstore_build_directory)

.PHONY: test
test: composer
	$(CURDIR)/vendor/bin/phpunit -c phpunit.xml

# Builds the source package for the app store, ignores php and js tests
.PHONY: appstore
appstore:
	rm -rf $(appstore_build_directory)
	mkdir -p $(appstore_build_directory)
	composer install --no-dev
	tar -cvzf $(appstore_package_name).tar.gz \
	--exclude-vcs \
	$(project_directory)/appinfo \
	$(project_directory)/cfssl \
	$(project_directory)/img \
	$(project_directory)/js \
	$(project_directory)/lib \
	$(project_directory)/node_modules \
	$(project_directory)/templates \
	$(project_directory)/vendor