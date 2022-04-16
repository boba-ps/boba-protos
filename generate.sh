#!/bin/sh
targets=$(cat "targets.txt" | sed -e 's/\s*#.*$//' | sed -e '/^\s*$/d')
schemas=()

# read target list
for target in ${targets[@]}; do
  schemas=("${schemas[@]}" "schemas/$target.proto")
done

# compile all targets
pnpm protoc \
  --proto_path schemas \
  --ts_out types \
  --ts_opt generate_dependencies \
  --ts_opt output_javascript \
  ${schemas[@]}

# generate index file
rm -f "index.ts"

for target in ${targets[@]}; do
  echo "export * from \"./types/$target\"" >> "index.ts"
done
