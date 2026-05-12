---
source_path: "documentation/AVFoundation/avcapturedevice/format/isautovideoframeratesupported.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isautovideoframeratesupported"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isautovideoframeratesupported:0000:0001">isAutoVideoFrameRateSupported</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isautovideoframeratesupported:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isautovideoframeratesupported:0002:0001">형식이 자동 비디오 프레임 속도 조정을 수행할 수 있는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isautovideoframeratesupported:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isautovideoframeratesupported:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isautovideoframeratesupported:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isautovideoframeratesupported:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isautovideoframeratesupported:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isautovideoframeratesupported:0004:0005">tvOS 18.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isAutoVideoFrameRateSupported: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 캡처 장치의 <a href="avcapturedevice/isautovideoframerateenabled.md">@@TOKEN_0@@</a> 속성을 활성화할 수 있는지 결정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var videoSupportedFrameRateRanges: [AVFrameRateRange]](avcapturedevice/format/videosupportedframerateranges.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">형식이 지원하는 프레임 속도 범위 목록입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avframeraterange.md">class AVFrameRateRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">유효한 프레임 속도 범위를 나타내는 불변 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/format/isvideobinned.md">var isVideoBinned: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">형식이 binned 형식으로 비디오 데이터를 생성하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/format/isvideohdrsupported.md">var isVideoHDRSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">형식이 HDR 스트리밍을 지원하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/format/ismulticamsupported.md">var isMultiCamSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">다중 카메라 캡처 세션이 이 형식을 지원하는지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isautovideoframeratesupported">View on Apple Developer</a>*</span>
