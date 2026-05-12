---
source_path: "documentation/AVFoundation/avcapturedevice/isadjustingwhitebalance.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/isadjustingwhitebalance"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isadjustingwhitebalance:0000:0001">isAdjustingWhiteBalance</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isadjustingwhitebalance:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isadjustingwhitebalance:0002:0001">장치가 현재 화이트 밸런스를 조정 중인지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isadjustingwhitebalance:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isadjustingwhitebalance:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isadjustingwhitebalance:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isadjustingwhitebalance:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isadjustingwhitebalance:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:isadjustingwhitebalance:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isAdjustingWhiteBalance: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Camera calibration data is present only if you specified the <a href="avcapturephotosettings/iscameracalibrationdatadeliveryenabled.md">@@TOKEN_0@@</a> and <a href="avcapturephotosettings/isdualcameradualphotodeliveryenabled.md">@@TOKEN_1@@</a> settings when requesting capture.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/isadjustingwhitebalance">View on Apple Developer</a>*</span>
