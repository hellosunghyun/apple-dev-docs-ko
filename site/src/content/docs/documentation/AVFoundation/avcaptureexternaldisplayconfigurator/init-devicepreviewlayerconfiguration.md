---
source_path: "documentation/AVFoundation/avcaptureexternaldisplayconfigurator/init-devicepreviewlayerconfiguration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/init-devicepreviewlayerconfiguration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initdevicepreviewlayerconfiguration:0000:0001">init(device:previewLayer:configuration:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdevicepreviewlayerconfiguration:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdevicepreviewlayerconfiguration:0002:0001">장치 캡처 구성과 외부 디스플레이 구성의 동기화를 시도하는 외부 디스플레이 구성 인스턴스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdevicepreviewlayerconfiguration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initdevicepreviewlayerconfiguration:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdevicepreviewlayerconfiguration:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdevicepreviewlayerconfiguration:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdevicepreviewlayerconfiguration:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdevicepreviewlayerconfiguration:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(device: AVCaptureDevice, previewLayer: CALayer, configuration: AVCaptureExternalDisplayConfiguration)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="avcaptureexternaldisplayconfigurator.md">@@TOKEN_0@@</a> 인스턴스입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><a href="avcaptureexternaldisplayconfigurator.md">@@TOKEN_0@@</a>는 외부 디스플레이에서만 적용됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 구성은 제공한 구성(<a href="avcaptureexternaldisplayconfiguration.md">@@TOKEN_0@@</a> 참조)에 따라 외부 디스플레이에서 구성할 속성을 결정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">구성자는 카메라 구성을 관찰하고 변경이 감지되면 외부 디스플레이의 속성을 일치하도록 수정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">동일한 외부 디스플레이에 여러 구성자가 연결된 경우 마지막에 생성된 구성자가 해당 외부 디스플레이의 활성 구성자가 됩니다 (<a href="avcaptureexternaldisplayconfigurator/isactive.md">@@TOKEN_0@@</a> 참조).</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">❗ **중요**: <a href="avcaptureexternaldisplayconfiguration.md">@@TOKEN_0@@</a> 옵션 중 하나라도 지원되지 않으면 <code>NSInvalidArgumentException</code>이 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>device</code>: 구성을 모니터링할 장치입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>previewLayer</code>: 카메라 미리보기를 표시하기 위해 외부 디스플레이에서 사용하는 레이어입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>configuration</code>: 카메라의 활성 형식에서 외부 디스플레이에 모니터링하고 구성할 항목을 지정하는 구성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/init(device:previewlayer:configuration:">View on Apple Developer</a>)*</span>
