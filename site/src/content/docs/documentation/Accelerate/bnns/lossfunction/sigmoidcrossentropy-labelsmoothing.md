---
source_path: "documentation/Accelerate/bnns/lossfunction/sigmoidcrossentropy-labelsmoothing.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/lossfunction/sigmoidcrossentropy-labelsmoothing"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0000:0001">BNNS.LossFunction.sigmoidCrossEntropy(labelSmoothing:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0001:0001">**Framework**: Accelerate **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0002:0001">입력 logits에 sigmoid 활성화를 적용하고 각 클래스에 대해 cross-entropy 손실을 독립적으로 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionsigmoidcrossentropylabelsmoothing:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case sigmoidCrossEntropy(labelSmoothing: Float)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnns/lossfunction/categoricalcrossentropy.md">BNNS.LossFunction.categoricalCrossEntropy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">입력 예측과 레이블 간 범주형 교차 엔트로피 계산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/lossfunction/cosinedistance.md">BNNS.LossFunction.cosineDistance</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">입력 예측과 레이블 간 코사인 거리 손실 계산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/lossfunction/hinge.md">BNNS.LossFunction.hinge</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/lossfunction/huber(huberdelta:">BNNS.LossFunction.huber(huberDelta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">입력 로짓과 one-hot 인코딩 레이블 간 Huber 손실 계산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/lossfunction/log.md">BNNS.LossFunction.log</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">레이블과 예측 간 로그 손실 계산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnns/lossfunction/meanabsoluteerror.md">BNNS.LossFunction.meanAbsoluteError</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">입력 예측과 레이블 간 평균 절대 오차(MAE) 계산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnns/lossfunction/meansquareerror.md">BNNS.LossFunction.meanSquareError</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">입력 로짓과 one-hot 인코딩 레이블 간 평균 제곱 오차(MSE) 계산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnns/lossfunction/softmaxcrossentropy(labelsmoothing:">BNNS.LossFunction.softmaxCrossEntropy(labelSmoothing:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력 로짓에 softmax 활성화를 적용하고 one-hot 인코딩 레이블과의 교차 엔트로피 손실을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnns/lossfunction/yolo(parameters:">case yolo(parameters: BNNS.LossFunction.YoloParameters)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">예측값과 실제 레이블 간 You Only Look Once (YOLO) 손실 계산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/lossfunction/yoloparameters.md">BNNS.LossFunction.YoloParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">You Only Look Once (YOLO) 손실 계산에 필요한 매개변수를 포함하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/lossfunction/sigmoidcrossentropy(labelsmoothing:">Apple Developer에서 보기</a>)*</span>
