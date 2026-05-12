---
source_path: "documentation/AVFoundation/avcapturedevice/format/isstudiolightsupported.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isstudiolightsupported"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isstudiolightsupported:0000:0001">isStudioLightSupported</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstudiolightsupported:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstudiolightsupported:0002:0001">이 형식이 Studio Light를 지원하는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstudiolightsupported:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isstudiolightsupported:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstudiolightsupported:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstudiolightsupported:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstudiolightsupported:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstudiolightsupported:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isStudioLightSupported: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Camera calibration data is present only if you specified the <a href="avcapturephotosettings/iscameracalibrationdatadeliveryenabled.md">@@TOKEN_0@@</a> and <a href="avcapturephotosettings/isdualcameradualphotodeliveryenabled.md">@@TOKEN_1@@</a> settings when requesting capture.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/format/videoframeraterangeforstudiolight.md">var videoFrameRateRangeForStudioLight: AVFrameRateRange?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">사용자가 Studio Light를 활성화했을 때 사용 가능한 최소 및 최대 프레임 속도를 나타내는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isstudiolightsupported">View on Apple Developer</a>*</span>
