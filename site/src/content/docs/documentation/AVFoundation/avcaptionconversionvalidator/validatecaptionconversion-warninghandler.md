---
source_path: "documentation/AVFoundation/avcaptionconversionvalidator/validatecaptionconversion-warninghandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/validatecaptionconversion-warninghandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:validatecaptionconversionwarninghandler:0000:0001">validateCaptionConversion(warningHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:validatecaptionconversionwarninghandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:validatecaptionconversionwarninghandler:0002:0001">개체의 캡션을 유효성 검사합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:validatecaptionconversionwarninghandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:validatecaptionconversionwarninghandler:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:validatecaptionconversionwarninghandler:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:validatecaptionconversionwarninghandler:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:validatecaptionconversionwarninghandler:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func validateCaptionConversion(warningHandler handler: @escaping @Sendable (AVCaptionConversionWarning?) -> Void)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">By default, this value contains the array of devices that the <a href="avcapturedevice/supportedfallbackprimaryconstituentdevices.md">@@TOKEN_0@@</a> property provides.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이때 검증기의 <a href="avcaptionconversionvalidator/status-swift.property.md">@@TOKEN_0@@</a> 값은 <a href="avcaptionconversionvalidator/status-swift.enum/completed.md">@@TOKEN_1@@</a>로 변경됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">진행 중인 유효성 검사 작업을 중지하려면 <a href="avcaptionconversionvalidator/stopvalidating(">@@TOKEN_0@@</a>.md)을 호출합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">❗ **중요**: 검증기의 상태가 <a href="avcaptionconversionvalidator/status-swift.enum/unknown.md">@@TOKEN_0@@</a>일 때만 이 메서드를 호출할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>handler</code>: 시스템이 유효성 검사가 완료되면 호출하는 콜백입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var warnings: [AVCaptionConversionWarning]](avcaptionconversionvalidator/warnings.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">검증기가 발견한 경고의 컬렉션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcaptionconversionwarning.md">class AVCaptionConversionWarning</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">검증기에서 생성한 변환 경고를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcaptionconversionvalidator/stopvalidating.md">func stopValidating()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 유효성 검사 작업을 중지합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/validatecaptionconversion(warninghandler:">Apple Developer에서 보기</a>)*</span>
