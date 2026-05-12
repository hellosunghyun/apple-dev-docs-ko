---
source_path: "documentation/AVFoundation/avcapturedevice/iso.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/iso"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:iso:0000:0001">iso</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iso:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iso:0002:0001">현재 노출 ISO 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iso:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:iso:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iso:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iso:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iso:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var iso: Float { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 신호에 이득 값을 적용하여 센서의 빛 민감도를 제어합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 값은 활성 형식의 <a href="avcapturedevice/format/miniso.md">@@TOKEN_0@@</a> 값과 <a href="avcapturedevice/format/maxiso.md">@@TOKEN_1@@</a> 값 사이에 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">값이 클수록 이미지에 더 많은 노이즈가 발생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">ISO를 설정하려면 <a href="avcapturedevice/setexposuremodecustom(duration:iso:completionhandler:">@@TOKEN_0@@</a>.md) 메서드를 호출합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 키-값 관찰 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/exposureduration.md">var exposureDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">노출이 수행되는 시간의 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/activemaxexposureduration.md">var activeMaxExposureDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">자동 노출 알고리즘에서 정의된 최대 노출 기간(초)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/lensaperture.md">var lensAperture: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">렌즈 다이어프램의 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/setexposuremodecustom(duration:iso:completionhandler:">func setExposureModeCustom(duration: CMTime, iso: Float, completionHandler: ((CMTime) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">노출 모드를 사용자 지정 상태로 설정하고 노출 시간과 ISO를 지정한 값으로 잠급니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/iso">View on Apple Developer</a>*</span>
