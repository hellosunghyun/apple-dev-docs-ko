---
source_path: "documentation/AVFoundation/avcapturecolorspace/srgb.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturecolorspace/srgb"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturecolorspacesrgb:0000:0001">AVCaptureColorSpace.sRGB</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturecolorspacesrgb:0001:0001">**Framework**: AVFoundation **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturecolorspacesrgb:0002:0001">표준 RGB 색공간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturecolorspacesrgb:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturecolorspacesrgb:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecolorspacesrgb:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecolorspacesrgb:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecolorspacesrgb:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecolorspacesrgb:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case sRGB
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">모든 기기가 이 색공간을 지원합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">추가 참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturecolorspace/p3_d65.md">AVCaptureColorSpace.P3_D65</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">백색점으로 Illuminant D65를 사용하는 P3 D65 와이드 색공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturecolorspace/hlg_bt2020.md">AVCaptureColorSpace.HLG_BT2020</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">백색점으로 Illuminant D65를 사용하고 전송 함수로 Hybrid Log-Gamma (HLG)를 사용하는 BT.2020 와이드 색공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturecolorspace/applelog.md">AVCaptureColorSpace.appleLog</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">색 원색으로 BT2020을 사용하고 전송 함수로 Apple 정의 로그 곡선을 사용하는 Apple Log 색공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturecolorspace/applelog2.md">AVCaptureColorSpace.appleLog2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">색 원색으로 Apple Gamut를 사용하고 전송 함수로 Apple이 정의한 로그 곡선을 사용하는 Apple Log 2 색공간입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0002">이 색공간을 <a href="avcapturedevice.md">@@TOKEN_0@@</a>의 활성 색공간으로 설정하면, 동일한 <a href="avcapturedevice.md">@@TOKEN_1@@</a>에 연결된 모든 <a href="avcapturephotooutput.md">@@TOKEN_2@@</a> 또는 <a href="avcapturestillimageoutput.md">@@TOKEN_3@@</a>가 비활성화됩니다(해당 <a href="avcaptureconnection/isactive.md">@@TOKEN_4@@</a> 속성은 <code>false</code>를 반환합니다).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturecolorspace/srgb">View on Apple Developer</a>*</span>
