# CMDeviceMotion

Use this object to receive motion updates. Start updates only when your app needs them.

## Overview

`CMDeviceMotion` contains measurements from the device sensors. Use the `attitude` property to inspect device orientation.

- Request motion updates from `CMMotionManager`.
- Stop updates as soon as possible to save power.

| Topic | Description |
| --- | --- |
| attitude | The attitude of the device. |
| rotationRate | The rotation rate of the device. |

```swift
let manager = CMMotionManager()
manager.startDeviceMotionUpdates()
```

For the latest official details, see [Apple Developer Documentation](https://developer.apple.com/documentation/coremotion/cmdevicemotion).

