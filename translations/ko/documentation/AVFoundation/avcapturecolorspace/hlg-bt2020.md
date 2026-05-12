---
source_path: "documentation/AVFoundation/avcapturecolorspace/hlg-bt2020.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturecolorspace/hlg-bt2020"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturecolorspacehlgbt2020:0000:0001">AVCaptureColorSpace.HLG_BT2020</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturecolorspacehlgbt2020:0001:0001">**Framework**: AVFoundation **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturecolorspacehlgbt2020:0002:0001">화이트 포인트로 Illuminant D65를 사용하고 전송 함수로 Hybrid Log-Gamma(HLG)를 사용하는 BT.2020 와이드 컬러 공간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturecolorspacehlgbt2020:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturecolorspacehlgbt2020:0004:0001">iOS 14.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecolorspacehlgbt2020:0004:0002">iPadOS 14.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecolorspacehlgbt2020:0004:0003">Mac Catalyst 14.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecolorspacehlgbt2020:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case HLG_BT2020
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avcapturecolorspace/srgb.md">AVCaptureColorSpace.sRGB</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">표준 RGB 색 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturecolorspace/p3_d65.md">AVCaptureColorSpace.P3_D65</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">화이트 포인트로 Illuminant D65를 사용하는 P3 D65 와이드 컬러 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturecolorspace/applelog.md">AVCaptureColorSpace.appleLog</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">BT2020을 색채 좌표값으로 사용하고 Apple에서 정의한 Log 곡선을 전송 함수로 사용하는 Apple Log 색 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturecolorspace/applelog2.md">AVCaptureColorSpace.appleLog2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Apple Gamut를 색채 좌표값으로 사용하고 Apple이 정의한 Log 곡선을 전송 함수로 사용하는 Apple Log 2 색 공간입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0002">이 색 공간을 <a href="avcapturedevice.md">@@TOKEN_0@@</a>의 활성 색 공간으로 설정하면, 동일한 <a href="avcapturedevice.md">@@TOKEN_1@@</a>에 연결된 모든 <a href="avcapturephotooutput.md">@@TOKEN_2@@</a> 또는 <a href="avcapturestillimageoutput.md">@@TOKEN_3@@</a>는 비활성 상태가 됩니다(해당 <a href="avcaptureconnection/isactive.md">@@TOKEN_4@@</a> 속성이 <code>false</code>를 반환).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturecolorspace/hlg_bt2020">View on Apple Developer</a>*</span>
