---
source_path: "documentation/AVKit/avdisplaymanager/isdisplaymodeswitchinprogress.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avdisplaymanager/isdisplaymodeswitchinprogress"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isdisplaymodeswitchinprogress:0000:0001">isDisplayModeSwitchInProgress</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isdisplaymodeswitchinprogress:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isdisplaymodeswitchinprogress:0002:0001">A Boolean value that indicates whether a display mode switch is in progress.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isdisplaymodeswitchinprogress:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isdisplaymodeswitchinprogress:0004:0001">tvOS 11.2+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isDisplayModeSwitchInProgress: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">While this property value is <code>true</code>, your app should behave as if the display is currently changing modes, and may be temporarily blank.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이때 검증기의 <a href="avcaptionconversionvalidator/status-swift.property.md">@@TOKEN_0@@</a> 값은 <a href="avcaptionconversionvalidator/status-swift.enum/completed.md">@@TOKEN_1@@</a>로 변경됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">When displaying temporary content or user interface elements, such as hints or tips, leave them visible for longer than the mode switch takes, to ensure the user sees them.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">진행 중인 유효성 검사 작업을 중지하려면 <a href="avcaptionconversionvalidator/stopvalidating(">@@TOKEN_0@@</a>.md)을 호출합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avdisplaymanager/preferreddisplaycriteria.md">var preferredDisplayCriteria: AVDisplayCriteria?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">A hint for the TV to set the display mode to best match the currently playing content’s display criteria.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avdisplaymanager/isdisplaycriteriamatchingenabled.md">var isDisplayCriteriaMatchingEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">A Boolean value that indicates whether the user has enabled display critera matching.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avkit/avdisplaymanager/isdisplaymodeswitchinprogress">View on Apple Developer</a>*</span>
