---
source_path: "documentation/Accelerate/kvimagebuffertypecode-lab-l.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/kvimagebuffertypecode-lab-l"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:kvimagebuffertypecodelabl:0000:0001">kvImageBufferTypeCode_LAB_L</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagebuffertypecodelabl:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagebuffertypecodelabl:0002:0001">If the image has a LAB color model, the buffer contains the *L** channel.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagebuffertypecodelabl:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:kvimagebuffertypecodelabl:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagebuffertypecodelabl:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagebuffertypecodelabl:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagebuffertypecodelabl:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagebuffertypecodelabl:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagebuffertypecodelabl:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagebuffertypecodelabl:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var kvImageBufferTypeCode_LAB_L: Int { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="kvimagebuffertypecode_alpha.md">var kvImageBufferTypeCode_Alpha: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">원하는 색 범위에 맞는 적절한 색상 속성 키를 선택합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="kvimagebuffertypecode_cgformat.md">var kvImageBufferTypeCode_CGFormat: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">인터스티셜 이벤트의 스케줄입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="kvimagebuffertypecode_cmyk_black.md">var kvImageBufferTypeCode_CMYK_Black: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">마이크로 PDF417 심볼리지를 식별하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="kvimagebuffertypecode_cmyk_cyan.md">var kvImageBufferTypeCode_CMYK_Cyan: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">마이크로 QR 심볼리지를 식별하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="kvimagebuffertypecode_cmyk_magenta.md">var kvImageBufferTypeCode_CMYK_Magenta: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">PDF417 심볼리지를 식별하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="kvimagebuffertypecode_cmyk_yellow.md">var kvImageBufferTypeCode_CMYK_Yellow: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">예약 해제된 이벤트가 오류로 인해 발생했는지 나타내는 사전 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="kvimagebuffertypecode_cvpixelbuffer_ycbcr.md">var kvImageBufferTypeCode_CVPixelBuffer_YCbCr: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">AVPlayerInterstitialEvent가 재생을 완료할 때마다 게시되는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="kvimagebuffertypecode_cb.md">var kvImageBufferTypeCode_Cb: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification의 페이로드에 재생이 완료된 이벤트의 재생 시간을 나타내는 사전 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="kvimagebuffertypecode_chroma.md">var kvImageBufferTypeCode_Chroma: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification의 페이로드에서 재생이 완료된 이벤트가 완전히 재생되었는지 여부를 나타내는 사전 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="kvimagebuffertypecode_chunky.md">var kvImageBufferTypeCode_Chunky: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">현재 청크 저장소 URL에서 현재 샘플의 오프셋과 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="kvimagebuffertypecode_colorspacechannel1.md">var kvImageBufferTypeCode_ColorSpaceChannel1: Int</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0002"><a href="kvimagebuffertypecode_colorspacechannel10.md">var kvImageBufferTypeCode_ColorSpaceChannel10: Int</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0003"><a href="kvimagebuffertypecode_colorspacechannel11.md">var kvImageBufferTypeCode_ColorSpaceChannel11: Int</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0004"><a href="kvimagebuffertypecode_colorspacechannel12.md">var kvImageBufferTypeCode_ColorSpaceChannel12: Int</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0005"><a href="kvimagebuffertypecode_colorspacechannel13.md">var kvImageBufferTypeCode_ColorSpaceChannel13: Int</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/accelerate/kvimagebuffertypecode_lab_l">View on Apple Developer</a>*</span>
