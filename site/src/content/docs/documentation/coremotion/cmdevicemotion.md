---
source_path: "documentation/coremotion/cmdevicemotion.md"
upstream_sha: "sample-local"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/coremotion/cmdevicemotion"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cmdevicemotion:0000:0001">CMDeviceMotion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cmdevicemotion:0001:0001">이 객체를 사용해 receive motion updates.</span> <span class="ko-segment" data-segment-id="seg:paragraph:cmdevicemotion:0001:0002">시작합니다: updates only when your app needs them.</span>

## <span class="ko-segment" data-segment-id="seg:heading:overview:0002:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0003:0001"><code>CMDeviceMotion</code> contains measurements from the device sensors.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0003:0002">Use the <code>attitude</code> property to inspect device orientation.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0004:0001">Request motion updates from <code>CMMotionManager</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0004:0002">중지합니다: updates as soon as possible to save power.</span>

| <span class="ko-segment" data-segment-id="seg:table:overview:0005:0001">Topic</span> | <span class="ko-segment" data-segment-id="seg:table:overview:0005:0002">Description</span> |
| --- | --- |
| <span class="ko-segment" data-segment-id="seg:table:overview:0005:0003">attitude</span> | <span class="ko-segment" data-segment-id="seg:table:overview:0005:0004">The attitude of the device.</span> |
| <span class="ko-segment" data-segment-id="seg:table:overview:0005:0005">rotationRate</span> | <span class="ko-segment" data-segment-id="seg:table:overview:0005:0006">The rotation rate of the device.</span> |

```swift
let manager = CMMotionManager()
manager.startDeviceMotionUpdates()
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">For the latest official details, see <a href="https://developer.apple.com/documentation/coremotion/cmdevicemotion">Apple Developer Documentation</a>.</span>
