---
source_path: "documentation/Accelerate/bnnslossfilterapplybackwardbatch.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslossfilterapplybackwardbatch"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnslossfilterapplybackwardbatch:0000:0001">BNNSLossFilterApplyBackwardBatch(_:_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfilterapplybackwardbatch:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfilterapplybackwardbatch:0002:0001">Applies a loss filter backward to generate gradients.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfilterapplybackwardbatch:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnslossfilterapplybackwardbatch:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfilterapplybackwardbatch:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfilterapplybackwardbatch:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfilterapplybackwardbatch:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfilterapplybackwardbatch:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfilterapplybackwardbatch:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfilterapplybackwardbatch:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSLossFilterApplyBackwardBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ in: UnsafeRawPointer, _ in_stride: Int, _ in_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ in_delta_stride: Int, _ labels: UnsafeRawPointer, _ labels_stride: Int, _ weights: UnsafeRawPointer?, _ weights_size: Int, _ out_delta: UnsafePointer<BNNSNDArrayDescriptor>, _ out_delta_stride: Int) -> Int32
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>pixelBuffer</code>: 추적 중에 참조로 사용할 이미지입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>physicalSize</code>: 미터 단위의 이미지 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>orientation</code>: 이미지 자산의 방향입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>in_stride</code>: Increment, in values, between input objects.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>in_delta</code>: The descriptor of the input delta.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>in_delta_stride</code>: Increment, in values, between input delta objects.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>labels</code>: Pointer to the labels data.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>labels_stride</code>: Increment, in values, between labels.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0009"><code>weights</code>: Pointer to weights delta object.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0010"><code>weights_size</code>: Set to <code>0</code> for no weight loss scaling, or <code>1</code> for same weight scaling for all samples in the batch.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0011"><code>out_delta</code>: The descriptor of the output delta.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0012"><code>out_delta_stride</code>: Increment, in values, between output delta objects.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/losslayer.md">class LossLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A layer object that wraps a loss filter and manages its deinitialization.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslossfunction.md">struct BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Constants that describe loss functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslossreductionfunction.md">struct BNNSLossReductionFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Constants that describe reduction functions used by a loss layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparameterslossbase.md">struct BNNSLayerParametersLossBase</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이 세션에서 오디오를 AirPlay 장치로 스트리밍할 수 있는지 결정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslayerparameterslosshuber.md">struct BNNSLayerParametersLossHuber</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Bluetooth 핸즈프리 장치가 사용 가능한 입력 라우트로 표시되는지 결정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslayerparameterslosssigmoidcrossentropy.md">struct BNNSLayerParametersLossSigmoidCrossEntropy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이 옵션은 Advanced Audio Distribution Profile (A2DP)를 지원하는 Bluetooth 장치로 이 세션의 오디오를 스트리밍할 수 있는지 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparameterslosssoftmaxcrossentropy.md">struct BNNSLayerParametersLossSoftmaxCrossEntropy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">이 옵션은 Bluetooth Hands-Free Profile (HFP) 장치를 오디오 입력으로 사용할 수 있도록 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnslayerparameterslossyolo.md">struct BNNSLayerParametersLossYolo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">이 옵션은 세션의 오디오가 수신기 대신 내장 스피커로 기본 출력되는지 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiosession/categoryoptions-swift.struct/duckothers.md">static var duckOthers: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">이 옵션은 이 세션의 오디오가 재생되는 동안 다른 오디오 세션의 볼륨을 줄입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiosession/categoryoptions-swift.struct/farfieldinput.md">static var farFieldInput: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Applies a loss filter to a set of input objects, writing the result to a set of output objects.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">이 옵션은 앱이 오디오를 재생할 때 다른 세션의 음성 오디오 콘텐츠를 일시 중지할지 여부를 결정합니다.</span>
