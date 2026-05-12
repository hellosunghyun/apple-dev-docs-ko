---
source_path: "documentation/Accelerate/bnnslossfunction.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslossfunction"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnslossfunction:0000:0001">BNNSLossFunction</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfunction:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfunction:0002:0001">손실 함수를 설명하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfunction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunction:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunction:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunction:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunction:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunction:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunction:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunction:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSLossFunction
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:loss-functions:0008:0001">손실 함수</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0009:0001"><a href="bnnslossfunction/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0009:0002"><a href="bnnslossfunction/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0009:0003"><a href="bnnslossfunction/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0009:0004"><a href="bnnslossfunctioncategoricalcrossentropy.md">var BNNSLossFunctionCategoricalCrossEntropy: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-functions:0010:0001">입력 예측값과 레이블 사이의 범주형 교차 엔트로피 계산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0011:0001"><a href="bnnslossfunctioncosinedistance.md">var BNNSLossFunctionCosineDistance: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-functions:0012:0001">입력 예측값과 레이블 사이의 코사인 거리 손실 계산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0013:0001"><a href="bnnslossfunctionhinge.md">var BNNSLossFunctionHinge: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-functions:0014:0001">레이블과 경계가 없는 0 중심 이진 예측값 간의 Hinge 손실을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0015:0001"><a href="bnnslossfunctionhuber.md">var BNNSLossFunctionHuber: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-functions:0016:0001">입력 로짓과 원-핫 인코딩된 레이블 간의 Huber 손실 계산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0017:0001"><a href="bnnslossfunctionlog.md">var BNNSLossFunctionLog: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-functions:0018:0001">레이블과 예측값 간의 Log 손실 계산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0019:0001"><a href="bnnslossfunctionmeanabsoluteerror.md">var BNNSLossFunctionMeanAbsoluteError: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-functions:0020:0001">입력 예측값과 레이블 사이의 평균 절대 오차(MAE)를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0021:0001"><a href="bnnslossfunctionmeansquareerror.md">var BNNSLossFunctionMeanSquareError: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-functions:0022:0001">입력 로짓과 원-핫 인코딩된 레이블 간의 평균 제곱 오차(MSE)를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0023:0001"><a href="bnnslossfunctionsigmoidcrossentropy.md">var BNNSLossFunctionSigmoidCrossEntropy: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-functions:0024:0001">입력 로짓에서 시그모이드 활성화를 수행한 뒤 각 클래스별로 교차 엔트로피 손실을 독립적으로 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0025:0001"><a href="bnnslossfunctionsoftmaxcrossentropy.md">var BNNSLossFunctionSoftmaxCrossEntropy: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-functions:0026:0001">입력 로짓에서 소프트맥스 활성화를 수행하고 원-핫 인코딩 레이블로 교차 엔트로피 손실을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-functions:0027:0001"><a href="bnnslossfunctionyolo.md">var BNNSLossFunctionYolo: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-functions:0028:0001">예측값과 정답 레이블 간의 YOLO 손실 계산을 수행합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0029:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0030:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0005"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0032:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnns/losslayer.md">class LossLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">손실 필터를 래핑하고 해당 객체의 해제를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="bnnslossreductionfunction.md">struct BNNSLossReductionFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">손실 레이어에서 사용되는 감소 함수의 상수를 설명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="bnnslayerparameterslossbase.md">struct BNNSLayerParametersLossBase</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">손실 레이어의 매개변수를 보관하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="bnnslayerparameterslosshuber.md">struct BNNSLayerParametersLossHuber</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">Huber 손실 레이어의 매개변수를 보관하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="bnnslayerparameterslosssigmoidcrossentropy.md">struct BNNSLayerParametersLossSigmoidCrossEntropy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">시그모이드 교차 엔트로피 손실 레이어의 매개변수를 보관하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="bnnslayerparameterslosssoftmaxcrossentropy.md">struct BNNSLayerParametersLossSoftmaxCrossEntropy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">소프트맥스 교차 엔트로피 손실 레이어의 매개변수를 보관하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="bnnslayerparameterslossyolo.md">struct BNNSLayerParametersLossYolo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">YOLO 손실 레이어의 매개변수를 보관하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0047:0001"><a href="bnnsfiltercreatelayerloss(_:_:">func BNNSFilterCreateLayerLoss(UnsafeRawPointer, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">새 손실 레이어를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0049:0001"><a href="bnnslossfilterapplybatch(_:_:_:_:_:_:_:_:_:_:_:">func BNNSLossFilterApplyBatch(BNNSFilter?, Int, UnsafeRawPointer, Int, UnsafeRawPointer, Int, UnsafeRawPointer?, Int, UnsafeMutableRawPointer, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0050:0001">손실 필터를 입력 객체 집합에 적용해 결과를 출력 객체 집합에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="bnnslossfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:_:">func BNNSLossFilterApplyBackwardBatch(BNNSFilter?, Int, UnsafeRawPointer, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int, UnsafeRawPointer, Int, UnsafeRawPointer?, Int, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">손실 필터의 역방향 연산을 적용해 기울기를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslossfunction">View on Apple Developer</a>*</span>
