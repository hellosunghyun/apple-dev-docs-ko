---
source_path: "documentation/AVFoundation/avassetimagegenerator/images/element/actualtime.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/images/element/actualtime"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:actualtime:0000:0001">actualTime</span>

<span class="ko-segment" data-segment-id="seg:paragraph:actualtime:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:actualtime:0002:0001">이미지 생성기가 이미지를 생성하는 비디오 타임라인의 실제 시점입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:actualtime:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:actualtime:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:actualtime:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:actualtime:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:actualtime:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:actualtime:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:actualtime:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var actualTime: CMTime { get throws }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 값은 이미지 생성기의 <a href="avassetimagegenerator/requestedtimetolerancebefore.md">@@TOKEN_0@@</a> 및 <a href="avassetimagegenerator/requestedtimetoleranceafter.md">@@TOKEN_1@@</a> 속성 구성에 따라 <a href="avassetimagegenerator/images/element/requestedtime.md">@@TOKEN_2@@</a> 값과 다를 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetimagegenerator/images/element/image.md">var image: CGImage</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">요청된 시간에 대한 이미지입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetimagegenerator/images/element/requestedtime.md">var requestedTime: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이미지를 요청하는 비디오 타임라인의 시간입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/images/element/actualtime">View on Apple Developer</a>*</span>
