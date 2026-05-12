---
source_path: "documentation/AVFoundation/avcapturedevice/automaticallyadjustsvideohdrenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/automaticallyadjustsvideohdrenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:automaticallyadjustsvideohdrenabled:0000:0001">automaticallyAdjustsVideoHDREnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticallyadjustsvideohdrenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticallyadjustsvideohdrenabled:0002:0001">장치가 높은 동적 범위(HDR) 비디오 스트리밍의 상태를 자동으로 관리하는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticallyadjustsvideohdrenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:automaticallyadjustsvideohdrenabled:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticallyadjustsvideohdrenabled:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticallyadjustsvideohdrenabled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticallyadjustsvideohdrenabled:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var automaticallyAdjustsVideoHDREnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본값은 <code>true</code>이며, 캡처 장치는 현재 형식에 적합한 경우 <a href="avcapturedevice/isvideohdrenabled.md">@@TOKEN_1@@</a>를 자동으로 활성화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">If the photo capture output’s <a href="avcapturephotooutput/isstillimagestabilizationsupported.md">@@TOKEN_0@@</a> value is <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>, this property’s value is always <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_2@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/isvideohdrenabled.md">var isVideoHDREnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">장치가 확장 동적 범위(EDR)라고도 하는 HDR 비디오 버퍼를 스트리밍하는지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/automaticallyadjustsvideohdrenabled">View on Apple Developer</a>*</span>
