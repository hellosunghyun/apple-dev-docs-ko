---
source_path: "documentation/AVFoundation/avcapturedevice/activemaxexposureduration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/activemaxexposureduration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:activemaxexposureduration:0000:0001">activeMaxExposureDuration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activemaxexposureduration:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activemaxexposureduration:0002:0001">자동 노출 알고리즘에 의해 정의되는 최대 노출 기간(초)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activemaxexposureduration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:activemaxexposureduration:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activemaxexposureduration:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activemaxexposureduration:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activemaxexposureduration:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var activeMaxExposureDuration: CMTime { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>exposureMode</code>를 <a href="avcapturedevice/exposuremode-swift.enum/autoexpose.md">@@TOKEN_1@@</a> 또는 <a href="avcapturedevice/exposuremode-swift.enum/continuousautoexposure.md">@@TOKEN_2@@</a>로 설정하면 자동 노출 알고리즘이 현재 구성에 맞춘 기본 최대 노출 기간을 선택합니다. 이 값은 저조도 이미지 품질과 동작 보존을 균형 있게 조정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 속성을 쿼리하거나 키-값 관찰하면 현재 사용 중인 최대 노출 기간을 확인할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성을 형식의 <a href="avcapturedevice/format/minexposureduration.md">@@TOKEN_0@@</a>와 <a href="avcapturedevice/format/maxexposureduration.md">@@TOKEN_1@@</a> 값 사이의 값으로 설정하여 기본값을 재정의할 수도 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">범위를 벗어난 노출 값을 전달하면 시스템에서 예외가 발생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성을 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a>의 특수값으로 설정하면 현재 구성에서 장치 기본값으로 자동 노출 최대 노출 시간이 재설정됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">장치의 <a href="avcapturedevice/activeformat.md">@@TOKEN_0@@</a> 또는 캡처 세션의 <a href="avcapturesession/sessionpreset.md">@@TOKEN_1@@</a>가 변경되면, 이 속성은 새 형식 또는 세션 프리셋의 기본 최대 노출 기간으로 재설정됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">일부 기기에서는 형식 설정 시 <a href="avcapturesession/sessionpreset.md">@@TOKEN_0@@</a> API 또는 <a href="avcapturedevice/activeformat.md">@@TOKEN_1@@</a> API를 사용했는지에 따라 자동 노출 알고리즘이 특정 형식의 서로 다른 최대 노출 기간을 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">최대 노출 기간의 기본 처리 동작을 일관되게 하려면 캡처 입력의 <a href="avcapturedeviceinput/unifiedautoexposuredefaultsenabled.md">@@TOKEN_0@@</a> 속성을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>로 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/exposureduration.md">var exposureDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">노출이 이루어지는 시간의 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/iso.md">var iso: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">현재 노출 ISO 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedevice/lensaperture.md">var lensAperture: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">렌즈 조리개 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturedevice/setexposuremodecustom(duration:iso:completionhandler:">func setExposureModeCustom(duration: CMTime, iso: Float, completionHandler: ((CMTime) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">노출 모드를 사용자 지정 상태로 설정하고 노출 시간과 ISO를 명시 값으로 잠급니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/activemaxexposureduration">View on Apple Developer</a>*</span>
