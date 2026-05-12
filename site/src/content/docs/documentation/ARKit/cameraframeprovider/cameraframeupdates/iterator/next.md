---
source_path: "documentation/ARKit/cameraframeprovider/cameraframeupdates/iterator/next.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/cameraframeprovider/cameraframeupdates/iterator/next"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:next:0000:0001">next()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:next:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:next:0002:0001">다음 요소로 비동기적으로 이동해 반환하며, 다음 요소가 없으면 시퀀스를 종료합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:next:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:next:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
mutating func next() async -> CameraFrameProvider.CameraFrameUpdates.Element?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">다음 요소가 있으면 해당 요소를, 없으면 시퀀스의 끝을 알리기 위해 nil을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0010:0001">*<a href="https://developer.apple.com/documentation/arkit/cameraframeprovider/cameraframeupdates/iterator/next(">View on Apple Developer</a>)*</span>
