#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.getbouncecode.semoa/host.exp.exponent.MainActivity
