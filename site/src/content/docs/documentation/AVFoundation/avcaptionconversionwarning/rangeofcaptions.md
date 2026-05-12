---
source_path: "documentation/AVFoundation/avcaptionconversionwarning/rangeofcaptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning/rangeofcaptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rangeofcaptions:0000:0001">rangeOfCaptions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rangeofcaptions:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rangeofcaptions:0002:0001">시스템이 경고를 발행한 자막의 범위입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rangeofcaptions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rangeofcaptions:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rangeofcaptions:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rangeofcaptions:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rangeofcaptions:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rangeOfCaptions: NSRange { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 객체는 동일한 시간 범위의 자막만 참조합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">시작 시간과 길이가 다른 자막들이 동일한 문제를 갖거나 개별 자막에 여러 문제가 있는 경우, 검증기는 각 문제 케이스마다 이 클래스의 별도 인스턴스를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcaptionconversionwarning/warningtype-swift.property.md">var warningType: AVCaptionConversionWarning.WarningType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">검증 경고의 성격을 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcaptionconversionwarning/adjustment.md">var adjustment: AVCaptionConversionAdjustment?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">변환기가 자막을 특정 형식으로 변환할 때 수행하는 수정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcaptionconversionadjustment.md">class AVCaptionConversionAdjustment</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">자막 변환 검증 중에 발견된 문제를 수정하기 위한 조정을 설명하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcaptionconversionwarning/warningtype-swift.struct.md">AVCaptionConversionWarning.WarningType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">자막 변환 경고의 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning/rangeofcaptions">View on Apple Developer</a>*</span>
