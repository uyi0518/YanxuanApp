react-native run-android

cd android && gradlew clean && cd .. && react-native run-android

react-native bundle --platform android --entry-file index.js --bundle-output ./bundles/index.bundle --dev false

code-push release myfirstapp ./bundles 1.3.1

code-push deployment history myfirstapp Staging