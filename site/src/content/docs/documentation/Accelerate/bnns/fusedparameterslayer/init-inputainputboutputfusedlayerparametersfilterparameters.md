---
source_path: "documentation/Accelerate/bnns/fusedparameterslayer/init-inputainputboutputfusedlayerparametersfilterparameters.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/fusedparameterslayer/init-inputainputboutputfusedlayerparametersfilterparameters"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initinputainputboutputfusedlayerparametersfilterparameters:0000:0001">init(inputA:inputB:output:fusedLayerParameters:filterParameters:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initinputainputboutputfusedlayerparametersfilterparameters:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initinputainputboutputfusedlayerparametersfilterparameters:0002:0001">레이어 매개변수 배열을 사용하여 첫 번째 레이어가 두 입력을 받는 새 fused layer를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initinputainputboutputfusedlayerparametersfilterparameters:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initinputainputboutputfusedlayerparametersfilterparameters:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputainputboutputfusedlayerparametersfilterparameters:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputainputboutputfusedlayerparametersfilterparameters:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputainputboutputfusedlayerparametersfilterparameters:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputainputboutputfusedlayerparametersfilterparameters:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputainputboutputfusedlayerparametersfilterparameters:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputainputboutputfusedlayerparametersfilterparameters:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init?(inputA: BNNSNDArrayDescriptor, inputB: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, fusedLayerParameters: [any FusableLayerParameters], filterParameters: BNNSFilterParameters? = nil)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>inputA</code>: 첫 번째 입력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>inputB</code>: 두 번째 입력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>output</code>: 출력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>fusedLayerParameters</code>: fused layer 매개변수를 포함하는 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>filterParameters</code>: 런타임 필터 매개변수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[convenience init?(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, fusedLayerParameters: [any FusableLayerParameters], filterParameters: BNNSFilterParameters?)](bnns/fusedparameterslayer/init(input:output:fusedlayerparameters:filterparameters:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">레이어 매개변수 배열을 사용하여 새 fused layer를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[convenience init?(inputA: BNNSNDArrayDescriptor, inputB: BNNSNDArrayDescriptor, inputC: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, fusedLayerParameters: [any FusableLayerParameters], filterParameters: BNNSFilterParameters?)](bnns/fusedparameterslayer/init(inputa:inputb:inputc:output:fusedlayerparameters:filterparameters:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">레이어 매개변수 배열을 사용하여 첫 번째 레이어가 세 입력을 받는 새 fused layer를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/fusedparameterslayer/init(inputa:inputb:output:fusedlayerparameters:filterparameters:">View on Apple Developer</a>)*</span>
