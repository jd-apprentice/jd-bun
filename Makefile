build_command ?= bun run build
install_command ?= bun install

application ?= app_name

binary_location ?= ./lib/
binary_name ?= $(application)
binary ?= $(binary_location)$(binary_name)

all: install build execute

install:
	$(install_command)

build: 
	$(build_command)

execute:
	./$(binary)
