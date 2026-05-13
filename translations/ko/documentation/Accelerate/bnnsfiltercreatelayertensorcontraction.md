---
source_path: "documentation/Accelerate/bnnsfiltercreatelayertensorcontraction.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsfiltercreatelayertensorcontraction"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsfiltercreatelayertensorcontraction:0000:0001">BNNSFilterCreateLayerTensorContraction(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfiltercreatelayertensorcontraction:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfiltercreatelayertensorcontraction:0002:0001">Returns a new tensor-contraction layer.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfiltercreatelayertensorcontraction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsfiltercreatelayertensorcontraction:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfiltercreatelayertensorcontraction:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfiltercreatelayertensorcontraction:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfiltercreatelayertensorcontraction:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfiltercreatelayertensorcontraction:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfiltercreatelayertensorcontraction:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfiltercreatelayertensorcontraction:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSFilterCreateLayerTensorContraction(_ layer_params: UnsafePointer<BNNSLayerParametersTensorContraction>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSFilter?
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">텐서 축약은 두 텐서의 원소를 하나 이상의 인덱스에 대해 합산한 값입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">BNNS represents this in the <code>operation</code> parameter of a <a href="bnnslayerparameterstensorcontraction.md">@@TOKEN_1@@</a> structure as a string using Einstein’s summation convention.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">예를 들어 문자열은 다음과 같습니다.</span>

```c
"a_ijp, b_ijq -> o_pq" 
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">연산을 나타냅니다:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">!<a href="https://docs-assets.developer.apple.com/published/c0c5777fa3a46aa2aa5826c438c5a9d5/media-3581536%402x.png">문자열 a_ijp, b_ijq -&gt; o_pq가 나타내는 방정식의 일반식을 수학적으로 설명합니다. o sub p q = alpha times i, j에 대한 합산 times a sub i sub j sub p times b sub i sub j sub q</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">입력은 학습된 매개변수이거나 입력일 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">밑줄 앞의 이름이 <code>“w”</code>이면 연산에서 해당 텐서를 학습된 매개변수(가중치)로 간주합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0002">그렇지 않으면 연산은 텐서를 입력으로 간주합니다. 이 문자는 다른 영향을 주지 않으며 원하는 값을 임의로 사용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0003">최대 하나의 입력만 학습된 매개변수일 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">좌측 입력의 이름이 일치하면 연산에서 텐서를 자기 자신과 축약한 것으로 간주합니다. 예를 들어 Gram 행렬 또는 내적을 계산할 때입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0016:0001">입력 중 하나가 weight이거나 연산이 텐서 자기 자신과의 축약인 경우에는 <a href="bnnsfilterapply(_:_:_:">@@TOKEN_0@@</a>.md) 또는 <a href="bnnsfilterapplybatch(_:_:_:_:_:_:">@@TOKEN_1@@</a>.md)를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0016:0002">연산에 입력이 두 개 있는 경우에는 <a href="bnnsfilterapplytwoinput(_:_:_:_:">@@TOKEN_0@@</a>.md) 또는 <a href="bnnsfilterapplytwoinputbatch(_:_:_:_:_:_:_:_:">@@TOKEN_1@@</a>.md)를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0017:0001">텐서 축약 계층을 사용하면 인덱스 순열로 한 계층에서 다른 계층으로 복사할 수도 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0017:0002">예를 들어 문자열은 다음과 같습니다.</span>

```c
"a_ij -> c_ji"
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0019:0001">연산을 나타냅니다:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0020:0001">![문자열 a_ij -&gt; c_ji가 나타내는 방정식의 일반식을 수학적으로 설명합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0020:0002">Cap C는 alpha times Cap A sup cap T입니다.](https://docs-assets.developer.apple.com/published/4f0e29c8ceb0e4cfc574293be1d66b53/media-3581537%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0021:0001">BNNS 텐서 축약은 최종 인덱스로 <code>“*”</code>를 사용해 브로드캐스팅을 지원합니다. 예를 들어 다음 문자열은 <code>a</code>와 <code>c</code>의 추가 인덱스에 일치합니다.</span>

```swift
"a_ij*, b_ij -> c_*"
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0023:0001"><code>“*”</code>는 항상 연산 양쪽 모두에 나타나는 인덱스를 나타내며, 축약에서 합산 대상이 되는 인덱스를 나타내지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0024:0001">한쪽에 있는 <code>“*”</code>는 다른 쪽의 <code>“*”</code>로 표시된 인덱스와만 일치하며, 문자가 표시한 인덱스와는 일치하지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0025:0001">축약에서 인덱스 문자가 일치할 때는 두 텐서의 해당 차원 크기가 동일해야 하며, 단 하나의 텐서 크기가 1인 경우는 예외입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0025:0002">이 경우 연산은 해당 차원에 맞도록 반복(브로드캐스트)됩니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:perform-a-tensor-contraction:0026:0001">텐서 축약 수행</span>

<span class="ko-segment" data-segment-id="seg:paragraph:perform-a-tensor-contraction:0027:0001">다음 코드는 2×1 행 우선(row-major) 행렬 두 개에 대한 텐서 축약을 수행하고 결과를 2×2 행 우선(row-major) 행렬에 기록합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:perform-a-tensor-contraction:0028:0001">먼저 입력 및 출력 행렬과 해당 디스크립터를 정의합니다.</span>

```swift
let aValues: [Float] = [1, 2]
let bValues: [Float] = [3, 4]

let inputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                            layout: BNNSDataLayoutRowMajorMatrix,
                                            size: (2, 1, 0, 0, 0, 0, 0, 0),
                                            stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                            data: nil,
                                            data_type: .float,
                                            table_data: nil,
                                            table_data_type: .float,
                                            data_scale: 1,
                                            data_bias: 0)

var outputValues = [Float](repeating: -1,
                           count: aValues.count * bValues.count)

let outputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                             layout: BNNSDataLayoutRowMajorMatrix,
                                             size: (2, 2, 0, 0, 0, 0, 0, 0),
                                             stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                             data: nil,
                                             data_type: .float,
                                             table_data: nil,
                                             table_data_type: .float,
                                             data_scale: 1,
                                             data_bias: 0)
```

<span class="ko-segment" data-segment-id="seg:paragraph:perform-a-tensor-contraction:0030:0001">축약을 수행하려면 다음 코드를 사용합니다.</span>

```swift
let operation = "a_ip, b_iq -> o_pq"

operation.withCString { operationPtr in
    
    var layer_params = BNNSLayerParametersTensorContraction(operation: operationPtr,
                                                            alpha: 10,
                                                            beta: 0,
                                                            iA_desc: inputDescriptor,
                                                            iB_desc: inputDescriptor,
                                                            o_desc: outputDescriptor)
    
    let layer = BNNSFilterCreateLayerTensorContraction(&layer_params,
                                                       nil)
    
    BNNSFilterApplyTwoInput(layer, aValues, bValues, &outputValues)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:perform-a-tensor-contraction:0032:0001">반환 시 <code>outputValues</code>에는 다음 값이 포함됩니다:</span>

```swift
[ 30.0,    // 10.0 * (1.0 * 3.0) 
  40.0,    // 10.0 * (1.0 * 4.0)
  60.0,    // 10.0 * (2.0 * 3.0)
  80.0 ]   // 10.0 * (2.0 * 4.0)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0034:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0035:0001"><code>layer_params</code>: 계층 매개변수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0035:0002"><code>filter_params</code>: 필터 런타임 매개변수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0036:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="bnnslayerparameterstensorcontraction.md">struct BNNSLayerParametersTensorContraction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">텐서 축약 계층의 매개변수를 포함하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsfiltercreatelayertensorcontraction(_:_:">Apple Developer에서 보기</a>)*</span>
