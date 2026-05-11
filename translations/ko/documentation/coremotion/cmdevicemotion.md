---
source_path: "documentation/coremotion/cmdevicemotion.md"
upstream_sha: "sample-local"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/coremotion/cmdevicemotion"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cmdevicemotion:0000:0001">CMDeviceMotion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cmdevicemotion:0001:0001">이 객체를 사용하여 모션 업데이트를 수신합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:cmdevicemotion:0001:0002">앱에 필요할 때만 업데이트를 시작합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:overview:0002:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0003:0001"><code>CMDeviceMotion</code>은 기기 센서의 측정값을 포함합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0003:0002"><code>attitude</code> 속성을 사용하여 기기의 방향을 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0004:0001"><code>CMMotionManager</code>에서 모션 업데이트를 요청합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0004:0002">전력을 절약하려면 가능한 한 빨리 업데이트를 중지합니다.</span>

| <span class="ko-segment" data-segment-id="seg:table:overview:0005:0001">Topic</span> | <span class="ko-segment" data-segment-id="seg:table:overview:0005:0002">Description</span> |
| --- | --- |
| <span class="ko-segment" data-segment-id="seg:table:overview:0005:0003">attitude</span> | <span class="ko-segment" data-segment-id="seg:table:overview:0005:0004">기기의 자세입니다.</span> |
| <span class="ko-segment" data-segment-id="seg:table:overview:0005:0005">rotationRate</span> | <span class="ko-segment" data-segment-id="seg:table:overview:0005:0006">기기의 회전 속도입니다.</span> |

```swift
let manager = CMMotionManager()
manager.startDeviceMotionUpdates()
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">최신 공식 세부 정보는 <a href="https://developer.apple.com/documentation/coremotion/cmdevicemotion">Apple Developer Documentation</a>을 참조하세요.</span>
