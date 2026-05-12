---
source_path: "documentation/AVFoundation/avcapturedevice/istorchactive.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/istorchactive"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:istorchactive:0000:0001">isTorchActive</span>

<span class="ko-segment" data-segment-id="seg:paragraph:istorchactive:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:istorchactive:0002:0001">기기가 전역 톤 매핑을 사용해야 하는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:istorchactive:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:istorchactive:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:istorchactive:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:istorchactive:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:istorchactive:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:istorchactive:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isTorchActive: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">토치는 활성화되기 전에 기기에 존재하고 현재 사용 가능해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성은 키-값 관찰 가능한 속성입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/hastorch.md">var hasTorch: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">캡처 장치에 토치가 있는지 지정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/istorchavailable.md">var isTorchAvailable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">토치가 현재 사용 가능한지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/torchlevel.md">var torchLevel: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">현재 토치 밝기 수준입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedevice/torchmode-swift.property.md">var torchMode: AVCaptureDevice.TorchMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">현재 토치 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturedevice/torchmode-swift.enum.md">AVCaptureDevice.TorchMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">캡처 장치의 토치 모드를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturedevice/istorchmodesupported(_:">func isTorchModeSupported(AVCaptureDevice.TorchMode) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">지정된 토치 모드를 기기가 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturedevice/settorchmodeon(level:">func setTorchModeOn(level: Float) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">토치 모드에서 조명 수준을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturedevice/maxavailabletorchlevel.md">class let maxAvailableTorchLevel: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">토치를 최대 수준으로 설정함을 나타내는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/istorchactive">View on Apple Developer</a>*</span>
