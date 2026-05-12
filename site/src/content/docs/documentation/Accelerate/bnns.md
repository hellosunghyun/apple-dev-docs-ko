---
source_path: "documentation/Accelerate/bnns.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnns:0000:0001">BNNS</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnns:0001:0001">**Framework**: Accelerate **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnns:0002:0001">BNNS에 대한 Swift 오버레이의 네임스페이스 역할을 하는 열거형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnns:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnns:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnns:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnns:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnns:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnns:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnns:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnns:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum BNNS
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:base-classes:0008:0001">기본 클래스</span>

- <span class="ko-segment" data-segment-id="seg:list:base-classes:0009:0001"><a href="bnns/layer.md">class Layer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:base-classes:0010:0001">필터를 래핑하고 해제 초기화를 관리하는 레이어 객체의 기본 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:base-classes:0011:0001"><a href="bnns/unarylayer.md">class UnaryLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:base-classes:0012:0001">단일 입력을 받는 레이어의 기본 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:base-classes:0013:0001"><a href="bnns/binarylayer.md">class BinaryLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:base-classes:0014:0001">두 개의 입력을 받는 레이어의 기본 클래스입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:classes:0015:0001">Classes</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0016:0001"><a href="bnns/activationlayer.md">class ActivationLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0017:0001">활성화 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0018:0001"><a href="bnns/binaryarithmeticlayer.md">class BinaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0019:0001">이진 산술 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0020:0001"><a href="bnns/broadcastmatrixmultiplylayer.md">class BroadcastMatrixMultiplyLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0021:0001">broadcast matrix multiply 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0022:0001"><a href="bnns/convolutionlayer.md">class ConvolutionLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0023:0001">convolution 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0024:0001"><a href="bnns/cropresizelayer.md">class CropResizeLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0025:0001">crop-resize 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0026:0001"><a href="bnns/dropoutlayer.md">class DropoutLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0027:0001">dropout 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0028:0001"><a href="bnns/embeddinglayer.md">class EmbeddingLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0029:0001">embedding 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0030:0001"><a href="bnns/fullyconnectedlayer.md">class FullyConnectedLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0031:0001">fully connected 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0032:0001"><a href="bnns/fusedconvolutionnormalizationlayer.md">class FusedConvolutionNormalizationLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0033:0001">fused, convolution normalization 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0034:0001"><a href="bnns/fusedfullyconnectednormalizationlayer.md">class FusedFullyConnectedNormalizationLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0035:0001">fused, fully connected normalization 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0036:0001"><a href="bnns/fusedlayer.md">class FusedLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0037:0001">fused convolution-normalization 및 fully connected-normalization 레이어의 기본 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0038:0001"><a href="bnns/fusedparameterslayer.md">class FusedParametersLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0039:0001">fused 레이어를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0040:0001"><a href="bnns/gramlayer.md">class GramLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0041:0001">Gram 행렬 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0042:0001"><a href="bnns/losslayer.md">class LossLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0043:0001">loss 필터를 래핑하고 해제 초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0044:0001"><a href="bnns/normalizationlayer.md">class NormalizationLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0045:0001">정규화 필터를 래핑하고 해당 객체의 deinitialization을 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0046:0001"><a href="bnns/paddinglayer.md">class PaddingLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0047:0001">패딩 필터를 래핑하고 해당 객체의 deinitialization을 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0048:0001"><a href="bnns/permutelayer.md">class PermuteLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0049:0001">permute 필터를 래핑하고 해당 객체의 deinitialization을 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0050:0001"><a href="bnns/poolinglayer.md">class PoolingLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0051:0001">pooling 필터를 래핑하고 해당 객체의 deinitialization을 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0052:0001"><a href="bnns/randomgenerator.md">class RandomGenerator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0053:0001">무작위 수 생성기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0054:0001"><a href="bnns/randomgeneratorstate.md">class RandomGeneratorState</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0055:0001">무작위 수 생성기의 상태를 포함하는 불투명 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0056:0001"><a href="bnns/reductionlayer.md">class ReductionLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0057:0001">reduction 필터를 래핑하고 해당 객체의 deinitialization을 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0058:0001"><a href="bnns/resizelayer.md">class ResizeLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0059:0001">resize 필터를 래핑하고 해당 객체의 deinitialization을 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0060:0001"><a href="bnns/ternaryarithmeticlayer.md">class TernaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0061:0001">삼항 산술 필터를 래핑하고 해당 객체의 deinitialization을 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:classes:0062:0001"><a href="bnns/unaryarithmeticlayer.md">class UnaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:classes:0063:0001">단항 산술 필터를 래핑하고 해당 객체의 deinitialization을 관리하는 레이어 객체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:structures:0064:0001">Structures</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0065:0001"><a href="bnns/adamoptimizer.md">struct AdamOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0066:0001">Adam 최적화 알고리즘을 사용하는 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0067:0001"><a href="bnns/adamwoptimizer.md">struct AdamWOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0068:0001">AdamW 최적화 알고리즘을 사용하는 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0069:0001"><a href="bnns/fusedbinaryarithmeticparameters.md">struct FusedBinaryArithmeticParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0070:0001">fused 이진 산술 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0071:0001"><a href="bnns/fusedconvolutionparameters.md">struct FusedConvolutionParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0072:0001">fused convolution 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0073:0001"><a href="bnns/fuseddequantizationparameters.md">struct FusedDequantizationParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0074:0001">fused dequantization 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0075:0001"><a href="bnns/fusedfullyconnectedparameters.md">struct FusedFullyConnectedParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0076:0001">fused fully connected 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0077:0001"><a href="bnns/fusednormalizationparameters.md">struct FusedNormalizationParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0078:0001">fused normalization 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0079:0001"><a href="bnns/fusedquantizationparameters.md">struct FusedQuantizationParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0080:0001">fused quantization 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0081:0001"><a href="bnns/fusedternaryarithmeticparameters.md">struct FusedTernaryArithmeticParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0082:0001">fused ternary arithmetic 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0083:0001"><a href="bnns/fusedunaryarithmeticparameters.md">struct FusedUnaryArithmeticParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0084:0001">fused unary arithmetic 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0085:0001"><a href="bnns/nearestneighbors.md">struct NearestNeighbors</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0086:0001">k-nearest neighbors를 계산하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0087:0001"><a href="bnns/norm.md">struct Norm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0088:0001">노름 유형을 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0089:0001"><a href="bnns/rmspropoptimizer.md">struct RMSPropOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0090:0001">root mean square propagation (RMSProp) 최적화 방법을 사용하는 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0091:0001"><a href="bnns/relationaloperator.md">struct RelationalOperator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0092:0001">관계 연산을 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0093:0001"><a href="bnns/sgdmomentumoptimizer.md">struct SGDMomentumOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0094:0001">모멘텀 최적화 방법을 사용하는 stochastic gradient descent (SGD) 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:structures:0095:0001"><a href="bnns/sparseparameters.md">struct SparseParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:structures:0096:0001">sparsity 함수에 대한 힌트를 제공하는 데이터 구조입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:type-methods:0097:0001">타입 메서드</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0098:0001">[static func applyActivation(activation: BNNS.ActivationFunction, axes: [Int], input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, batchSize: Int, filterParameters: BNNSFilterParameters?) throws](bnns/applyactivation(activation:axes:input:output:batchsize:filterparameters:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0099:0001">지정한 축에서 활성화 함수를 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0100:0001"><a href="bnns/applyactivation(activation:input:output:batchsize:filterparameters:">static func applyActivation(activation: BNNS.ActivationFunction, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, batchSize: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0101:0001">지정한 활성화 함수를 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0102:0001"><a href="bnns/applyintopk(k:input:testindices:output:axis:batchsize:filterparameters:">static func applyInTopK(k: Int, input: BNNSNDArrayDescriptor, testIndices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axis: Int, batchSize: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0103:0001">입력에 대해 in-top-k 필터를 직접 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0104:0001"><a href="bnns/applymatrixmultiplication(inputa:transposed:inputb:transposed:output:alpha:workspace:filterparameters:">static func applyMatrixMultiplication(inputA: BNNSNDArrayDescriptor, transposed: Bool, inputB: BNNSNDArrayDescriptor, transposed: Bool, output: BNNSNDArrayDescriptor, alpha: Float, workspace: UnsafeMutableRawBufferPointer?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0105:0001">두 입력 행렬에서 행렬 곱셈 연산을 직접 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0106:0001"><a href="bnns/applyreduction(_:input:output:weights:filterparameters:">static func applyReduction(BNNS.ReductionFunction, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, weights: BNNSNDArrayDescriptor?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0107:0001">지정한 reduction 함수를 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0108:0001"><a href="bnns/applytopk(k:input:bestvalues:bestindices:axis:batchsize:filterparameters:">static func applyTopK(k: Int, input: BNNSNDArrayDescriptor, bestValues: BNNSNDArrayDescriptor, bestIndices: BNNSNDArrayDescriptor, axis: Int, batchSize: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0109:0001">입력에 대해 top-k 필터를 직접 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0110:0001"><a href="bnns/clip(to:input:output:">static func clip(to: ClosedRange&lt;Float&gt;, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0111:0001">입력 텐서를 닫힌 구간으로 클리핑하고 그 결과를 출력 텐서에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0112:0001">[static func clipByGlobalNorm(threshold: Float, inputs: [BNNSNDArrayDescriptor], outputs: [BNNSNDArrayDescriptor], globalNorm: Float) throws](bnns/clipbyglobalnorm(threshold:inputs:outputs:globalnorm:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0113:0001">입력 텐서를 전역 유클리드 노름으로 클리핑하고 결과를 출력 텐서에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0114:0001">[static func clipByNorm(threshold: Float, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]?) throws](bnns/clipbynorm(threshold:input:output:axes:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0115:0001">입력 텐서를 유클리드 노름으로 클리핑하고 결과를 출력 텐서에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0116:0001"><a href="bnns/compare(_:_:using:output:">static func compare(BNNSNDArrayDescriptor, BNNSNDArrayDescriptor, using: BNNS.RelationalOperator, output: BNNSNDArrayDescriptor) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0117:0001">지정한 관계 연산자를 사용해 두 array descriptor를 요소별로 비교합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0118:0001">[static func computeNorm(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]?) throws](bnns/computenorm(input:output:axes:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0119:0001">유클리드 노름을 계산하고 그 결과를 출력 텐서에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0120:0001">[static func computeNormBackward(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]?, outputGradient: BNNSNDArrayDescriptor, generatingInputGradient: BNNSNDArrayDescriptor) throws](bnns/computenormbackward(input:output:axes:outputgradient:generatinginputgradient:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0121:0001">Backpropogates gradients for the compute norm function.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0122:0001"><a href="bnns/copy(_:to:filterparameters:">static func copy(BNNSNDArrayDescriptor, to: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0123:0001">Copies the contents of an n-dimensional array descriptor to another descriptor of the same shape.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0124:0001"><a href="bnns/copybandpart(_:to:lowerbandcount:upperbandcount:filterparameters:">static func copyBandPart(BNNSNDArrayDescriptor, to: BNNSNDArrayDescriptor, lowerBandCount: Int?, upperBandCount: Int?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0125:0001">Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0126:0001"><a href="bnns/dequantize(batchsize:input:output:axis:scale:bias:filterparameters:">static func dequantize(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axis: Int?, scale: BNNSNDArrayDescriptor?, bias: BNNSNDArrayDescriptor?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0127:0001">Dequantizes the input tensor and writes the result to the output tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0128:0001"><a href="bnns/gather(input:indices:output:axis:filterparameters:">static func gather(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axis: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0129:0001">Gathers the elements of a tensor along a single axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0130:0001"><a href="bnns/gathernd(input:indices:output:filterparameters:">static func gatherND(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0131:0001">Gathers the slices of a tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0132:0001"><a href="bnns/matrixmultiplicationworkspacesize(inputa:transposed:inputb:transposed:output:alpha:filterparameters:">static func matrixMultiplicationWorkspaceSize(inputA: BNNSNDArrayDescriptor, transposed: Bool, inputB: BNNSNDArrayDescriptor, transposed: Bool, output: BNNSNDArrayDescriptor, alpha: Float, filterParameters: BNNSFilterParameters?) -&gt; Int?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0133:0001">Returns the workspace size that a matrix multiply operation requires.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0134:0001"><a href="bnns/quantize(batchsize:input:output:axis:scale:bias:filterparameters:">static func quantize(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axis: Int?, scale: BNNSNDArrayDescriptor?, bias: BNNSNDArrayDescriptor?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0135:0001">Quantizes the input tensor and writes the result to the output tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0136:0001"><a href="bnns/scatter(input:indices:output:axis:filterparameters:">static func scatter(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axis: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:type-methods:0136:0002"><a href="bnns/scatter(input:indices:output:axis:reductionfunction:filterparameters:">static func scatter(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axis: Int, reductionFunction: BNNS.ReductionFunction, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0137:0001">Scatters the elements of a tensor along a single axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0138:0001"><a href="bnns/scatternd(input:indices:output:filterparameters:">static func scatterND(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:type-methods:0138:0002"><a href="bnns/scatternd(input:indices:output:reductionfunction:filterparameters:">static func scatterND(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, reductionFunction: BNNS.ReductionFunction, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0139:0001">Scatters the slices of a tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0140:0001"><a href="bnns/shuffle(_:input:output:filterparameters:">static func shuffle(BNNS.ShuffleType, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0141:0001">Rearranges elements in a tensor according to shuffle type.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0142:0001"><a href="bnns/tile(input:output:filterparameters:">static func tile(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0143:0001">Generates an output tensor by tiling an input tensor multiple times.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0144:0001"><a href="bnns/tilebackward(outputgradient:generatinginputgradient:filterparameters:">static func tileBackward(outputGradient: BNNSNDArrayDescriptor, generatingInputGradient: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0145:0001">Applies a tile filter backward to generate an input gradient.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0146:0001"><a href="bnns/transpose(input:output:firsttransposeaxis:secondtransposeaxis:filterparameters:">static func transpose(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, firstTransposeAxis: Int, secondTransposeAxis: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0147:0001">Transposes a tensor by swapping two of its dimensions.</span>

### <span class="ko-segment" data-segment-id="seg:heading:enumerations:0148:0001">Enumerations</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0149:0001"><a href="bnns/activationfunction.md">BNNS.ActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0150:0001">Constants that describe activation functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0151:0001"><a href="bnns/arithmeticbinaryfunction.md">BNNS.ArithmeticBinaryFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0152:0001">Constants that describe binary arithmetic functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0153:0001"><a href="bnns/arithmeticternaryfunction.md">BNNS.ArithmeticTernaryFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0154:0001">Constants that describe ternary arithmetic functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0155:0001"><a href="bnns/arithmeticunaryfunction.md">BNNS.ArithmeticUnaryFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0156:0001">Constants that describe unary arithmetic functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0157:0001"><a href="bnns/convolutionpadding.md">BNNS.ConvolutionPadding</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0158:0001">Constants that describe convolution padding modes.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0159:0001"><a href="bnns/convolutiontype.md">BNNS.ConvolutionType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0160:0001">Constants that describe convolution types.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0161:0001"><a href="bnns/datalayout.md">BNNS.DataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0162:0001">Constants that describe the data layout of an n-dimensional array descriptor shape.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0163:0001"><a href="bnns/descriptortype.md">BNNS.DescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0164:0001">Constants that describe the input and output types of an arithmetic operation.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0165:0001"><a href="bnns/error.md">BNNS.Error</a></span>
- <span class="ko-segment" data-segment-id="seg:list:enumerations:0165:0002"><a href="bnns/gradientclipping.md">BNNS.GradientClipping</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0166:0001">Constants that describe clipping functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0167:0001"><a href="bnns/interpolationmethod.md">BNNS.InterpolationMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0168:0001">Constants that specify interpolation methods for resize operations.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0169:0001"><a href="bnns/learningphase.md">BNNS.LearningPhase</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0170:0001">Constants that describe the learning phase of a normalization operation.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0171:0001"><a href="bnns/lossfunction.md">BNNS.LossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0172:0001">Constants that describe loss functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0173:0001"><a href="bnns/lossreduction.md">BNNS.LossReduction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0174:0001">An enumeration that describes loss reduction functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0175:0001"><a href="bnns/normalizationtype.md">BNNS.NormalizationType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0176:0001">Constants that describe normalization types.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0177:0001"><a href="bnns/paddingmode.md">BNNS.PaddingMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0178:0001">Constants that define padding modes.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0179:0001"><a href="bnns/poolingtype.md">BNNS.PoolingType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0180:0001">Constants that describe pooling types.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0181:0001"><a href="bnns/randomgeneratormethod.md">BNNS.RandomGeneratorMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0182:0001">Constants that describe random number generation methods.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0183:0001"><a href="bnns/reductionfunction.md">BNNS.ReductionFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0184:0001">Constants that describe reduction functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0185:0001"><a href="bnns/shape.md">BNNS.Shape</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0186:0001">Constants that describe the size and data layout of an n-dimensional array descriptor.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0187:0001"><a href="bnns/shuffletype.md">BNNS.ShuffleType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0188:0001">Constants that specify a shuffle type.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0189:0001"><a href="bnns/sparselayout.md">BNNS.SparseLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0190:0001">Constants that specify standardized sparse layouts that BNNS can convert to opaque.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumerations:0191:0001"><a href="bnns/sparsitytype.md">BNNS.SparsityType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumerations:0192:0001">Constants that specify patterns in the sparsity.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0193:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0194:0001"><a href="bnnsgraph.md">enum BNNSGraph</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0195:0001">An enumeration that acts as a namespace for the Swift overlays to BNNS Graph.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0197:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns">View on Apple Developer</a>*</span>
