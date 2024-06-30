#!/bin/bash

read -p "Enter the new name: " new_name

if [ -z "$new_name" ]; then
  echo "The name cannot be empty."
  exit 1
fi

exclude_files=("README.md" "bun.lockb")
exclude_pattern=$(printf " --exclude=%s" "${exclude_files[@]}")

eval "grep -rl 'sample' $exclude_pattern . | xargs sed -i 's/sample/$new_name/g'"

echo "Replacement completed. 🚀"
