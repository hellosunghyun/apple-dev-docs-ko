---
source_path: "documentation/Accelerate/bnnsgraph/builder/tensor/select-1fiqe.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/select-1fiqe"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:select:0000:0001">select(_:_:)”</span>

<span class="ko-segment" data-segment-id="seg:paragraph:select:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:select:0002:0001">현재 그래프에 텐서-텐서 select 연산을 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:select:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:select:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:select:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:select:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:select:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:select:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:select:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:select:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func select<U>(_ valueIfTrue: BNNSGraph.Builder.Tensor<U>, _ valueIfFalse: BNNSGraph.Builder.Tensor<U>) -> BNNSGraph.Builder.Tensor<U> where U : BNNSScalar
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">예를 들어, 다음 코드는 <code>z</code>의 해당 요소가 <code>true</code>일 때 <code>valueIfTrue</code> 요소를 반환하고 <code>z</code>의 해당 요소가 <code>false</code>일 때 <code>valueIfFalse</code> 요소를 반환합니다.</span>

```None
let ctx = try BNNSGraph.makeContext {

    builder in

    let z = builder.argument(dataType: Bool.self, shape: [8])

    let x = builder.argument(dataType: Float.self, shape: [8])
    let y = builder.argument(dataType: Float.self, shape: [8])

    let masked = z.select(x, y)

    return [ masked ]
}

let z = BNNSTensor.allocate(initializingFrom: [true, true, false, false,
                                               true, true, false, false],
                            shape: [8], stride: [1])

let x = BNNSTensor.allocate(initializingFrom: [1, 2, 3, 4, 5, 6, 7, 8] as [Float],
                            shape: [8], stride: [1])
let y = BNNSTensor.allocate(initializingFrom: [10, 20, 30, 40, 50, 60, 70, 80] as [Float],
                            shape: [8], stride: [1])

let tensor_tensor = BNNSTensor.allocateUninitialized(scalarType: Float.self, shape: [8], stride: [1])

var args = [tensor_tensor, tensor_scalar, scalar_tensor, z, x, y]

try ctx.executeFunction(arguments: &args)

// Prints "[1.0, 2.0, 30.0, 40.0, 5.0, 6.0, 70.0, 80.0]".
print(tensor_tensor.makeArray(of: Float.self))

```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>valueIfTrue</code>: 작업에서 <code>self</code>의 해당 값이 <code>true</code>일 때 반환되는 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>valueIfFalse</code>: 작업에서 <code>self</code>의 해당 값이 <code>false</code>일 때 반환되는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/select(_:_:">View on Apple Developer</a>-1fiqe)*</span>
