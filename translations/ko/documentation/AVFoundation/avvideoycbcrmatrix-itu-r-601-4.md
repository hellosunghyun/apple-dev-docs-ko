---
source_path: "documentation/AVFoundation/avvideoycbcrmatrix-itu-r-601-4.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideoycbcrmatrix-itu-r-601-4"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avvideoycbcrmatrixitur6014:0000:0001">AVVideoYCbCrMatrix_ITU_R_601_4</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideoycbcrmatrixitur6014:0001:0001">**Framework**: AVFoundation **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideoycbcrmatrixitur6014:0002:0001">ITU-R BT.601 변환을 위한 Y’CbCr 색상 행렬입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideoycbcrmatrixitur6014:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avvideoycbcrmatrixitur6014:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoycbcrmatrixitur6014:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoycbcrmatrixitur6014:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoycbcrmatrixitur6014:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoycbcrmatrixitur6014:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoycbcrmatrixitur6014:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let AVVideoYCbCrMatrix_ITU_R_601_4: String
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="setting-color-properties-for-a-specific-resolution.md">Setting color properties for a specific resolution</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="setting-color-properties-for-a-specific-resolution.md">Setting color properties for a specific resolution</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">원하는 색상 범위에 맞는 적절한 색상 속성 키를 선택합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideoallowwidecolorkey.md">let AVVideoAllowWideColorKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">클라이언트가 와이드 컬러를 처리할 수 있는지 나타내는 딕셔너리 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocolorprimarieskey.md">let AVVideoColorPrimariesKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">색상 기본값을 식별하는 색상 속성 딕셔너리 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideocolorprimaries_ebu_3213.md">let AVVideoColorPrimaries_EBU_3213: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">색상 기본값은 EBU Tech.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0002">3213 색 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avvideocolorprimaries_itu_r_2020.md">let AVVideoColorPrimaries_ITU_R_2020: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">색상 기본값은 초고해상도 텔레비전용 ITU_R BT.2020 색상 공간에 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avvideocolorprimaries_itu_r_709_2.md">let AVVideoColorPrimaries_ITU_R_709_2: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">색상 기본값은 ITU_R BT.709 색상 공간에 해당합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avvideocolorprimaries_p3_d65.md">let AVVideoColorPrimaries_P3_D65: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">색상 기본값은 DCI-P3 D65 색상 공간을 사용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avvideocolorprimaries_smpte_c.md">let AVVideoColorPrimaries_SMPTE_C: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">색상 기본값은 SMPTE C 색상 공간을 사용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avvideocolorpropertieskey.md">let AVVideoColorPropertiesKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">비디오 색상을 지정하는 속성을 포함하는 딕셔너리의 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avvideotransferfunctionkey.md">let AVVideoTransferFunctionKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">색상 속성 딕셔너리에서 전송 함수를 식별하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avvideotransferfunction_iec_srgb.md">let AVVideoTransferFunction_IEC_sRGB: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">IEC sRGB 색상 공간의 전송 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avvideotransferfunction_itu_r_2100_hlg.md">let AVVideoTransferFunction_ITU_R_2100_HLG: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">ITU_R BT.2100 색상 공간의 전송 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avvideotransferfunction_itu_r_709_2.md">let AVVideoTransferFunction_ITU_R_709_2: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">ITU_R BT.709 색상 공간의 전송 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avvideotransferfunction_linear.md">let AVVideoTransferFunction_Linear: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">선형 색상 공간의 전송 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avvideotransferfunction_smpte_240m_1995.md">let AVVideoTransferFunction_SMPTE_240M_1995: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">SMPTE 240M 색상 공간의 전송 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideoycbcrmatrix_itu_r_601_4">View on Apple Developer</a>*</span>
