---
source_path: "documentation/AVFoundation/avcapturedevice/automaticallyadjustsfacedrivenautoexposureenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/automaticallyadjustsfacedrivenautoexposureenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:automaticallyadjustsfacedrivenautoexposureenabled:0000:0001">automaticallyAdjustsFaceDrivenAutoExposureEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticallyadjustsfacedrivenautoexposureenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticallyadjustsfacedrivenautoexposureenabled:0002:0001">기기가 얼굴 기반 autoexposure을 자동으로 조정하는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticallyadjustsfacedrivenautoexposureenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:automaticallyadjustsfacedrivenautoexposureenabled:0004:0001">iOS 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticallyadjustsfacedrivenautoexposureenabled:0004:0002">iPadOS 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticallyadjustsfacedrivenautoexposureenabled:0004:0003">Mac Catalyst 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticallyadjustsfacedrivenautoexposureenabled:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var automaticallyAdjustsFaceDrivenAutoExposureEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The delegate is an object conforming to the <a href="avcapturefileoutputdelegate.md">@@TOKEN_0@@</a> protocol that will be able to monitor and control recording along exact sample boundaries.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">앱에서 <a href="avcapturedevice/isfacedrivenautoexposureenabled.md">@@TOKEN_0@@</a>의 상태를 명시적으로 설정해야 하는 경우 이 값을 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>로 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">The system normalizes gain values to the minimum channel value to avoid brightness changes (for example, <code>R:2 G:2 B:4</code> normalizes to <code>R:1 G:1 B:2</code>).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">그렇지 않으면 값을 설정하려고 할 때 예외가 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">장치 구성을 완료하면 <a href="avcapturedevice/unlockforconfiguration(">@@TOKEN_0@@</a>.md)로 잠금을 해제합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/isfacedrivenautoexposureenabled.md">var isFaceDrivenAutoExposureEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">기기가 얼굴 기반 autoexposure을 활성화했는지 나타내는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/automaticallyadjustsfacedrivenautoexposureenabled">View on Apple Developer</a>*</span>
