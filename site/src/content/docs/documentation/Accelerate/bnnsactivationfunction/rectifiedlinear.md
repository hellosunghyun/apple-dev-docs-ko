---
source_path: "documentation/Accelerate/bnnsactivationfunction/rectifiedlinear.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/rectifiedlinear"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rectifiedlinear:0000:0001">rectifiedLinear</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rectifiedlinear:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rectifiedlinear:0002:0001">입력이 0 이상이면 입력을 반환하고, 그렇지 않으면 0을 반환하는 활성화 함수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rectifiedlinear:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rectifiedlinear:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rectifiedlinear:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rectifiedlinear:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rectifiedlinear:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:rectifiedlinear:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rectifiedlinear:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rectifiedlinear:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var rectifiedLinear: BNNSActivationFunction { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Solves the system of equations <code>A*X=B</code> or <code>A'*X=B</code>, depending on the value of <code>TransA</code>.</span>

```c
0 if x<0, and x if x>=0
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">다음은 입력 범위 <code>-10...10</code>에서 활성화 함수가 생성하는 출력을 보여줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">!<a href="https://docs-assets.developer.apple.com/published/ac09c4df1ca2b7594664399eac737778/media-3394575%402x.png">Graph that shows input values for the activation function on horizontal axis and its output values on vertical axis. </a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsactivationfunction/abs.md">static var abs: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">입력의 절대값을 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnsactivationfunction/clamp.md">static var clamp: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">입력을 지정된 범위로 제한한 값을 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnsactivationfunction/identity.md">static var identity: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">입력을 그대로 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnsactivationfunction/integerlinearsaturate.md">static var integerLinearSaturate: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">부호를 유지하는 산술 시프트를 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnsactivationfunction/integerlinearsaturateperchannel.md">static var integerLinearSaturatePerChannel: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">채널별로 부호를 유지하는 산술 시프트를 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnnsactivationfunction/leakyrectifiedlinear.md">static var leakyRectifiedLinear: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">입력이 0 이상이면 입력을 반환하고, 그렇지 않으면 지정한 값과 곱한 입력을 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnnsactivationfunction/linear.md">static var linear: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">입력을 지정한 값과 곱해 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnnsactivationfunction/scaledtanh.md">static var scaledTanh: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">입력의 스케일링된 하이퍼볼릭 탄젠트 값을 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnsactivationfunction/sigmoid.md">static var sigmoid: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">입력의 시그모이드 함수를 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="bnnsactivationfunction/softmax.md">static var softmax: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">입력의 softmax 함수를 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnnsactivationfunction/tanh.md">static var tanh: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">입력의 하이퍼볼릭 탄젠트 값을 반환하는 활성화 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/rectifiedlinear">View on Apple Developer</a>*</span>
