---
source_path: "documentation/AVFoundation/avcapturedevice/istorchmodesupported.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/istorchmodesupported"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:istorchmodesupported:0000:0001">isTorchModeSupported(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:istorchmodesupported:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:istorchmodesupported:0002:0001">지정한 토치 모드를 장치가 지원하는지를 나타내는 부울 값을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:istorchmodesupported:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:istorchmodesupported:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:istorchmodesupported:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:istorchmodesupported:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:istorchmodesupported:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:istorchmodesupported:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func isTorchModeSupported(_ torchMode: AVCaptureDevice.TorchMode) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A rectangle in the <a href="avcaptureoutput.md">@@TOKEN_0@@</a> object’s coordinate system.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>torchMode</code>: 원하는 토치 모드입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/hastorch.md">var hasTorch: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">캡처 장치에 토치가 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/istorchavailable.md">var isTorchAvailable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">토치가 현재 사용 가능한지를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/istorchactive.md">var isTorchActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">장치의 토치가 현재 활성 상태인지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/torchlevel.md">var torchLevel: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureoutput/outputrectconverted(frommetadataoutputrect:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturedevice/torchmode-swift.property.md">var torchMode: AVCaptureDevice.TorchMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">현재 토치 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturedevice/torchmode-swift.enum.md">AVCaptureDevice.TorchMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">캡처 장치의 토치 모드를 지정하기 위한 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcapturedevice/settorchmodeon(level:">func setTorchModeOn(level: Float) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">토치 모드일 때 조명 수준을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avcapturedevice/maxavailabletorchlevel.md">class let maxAvailableTorchLevel: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">토치를 최대 수준으로 설정하도록 지정하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/istorchmodesupported(_:">View on Apple Developer</a>)*</span>
