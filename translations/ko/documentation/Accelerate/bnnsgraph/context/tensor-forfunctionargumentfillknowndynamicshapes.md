---
source_path: "documentation/Accelerate/bnnsgraph/context/tensor-forfunctionargumentfillknowndynamicshapes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/context/tensor-forfunctionargumentfillknowndynamicshapes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:tensorforfunctionargumentfillknowndynamicshapes:0000:0001">tensor(forFunction:argument:fillKnownDynamicShapes:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tensorforfunctionargumentfillknowndynamicshapes:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tensorforfunctionargumentfillknowndynamicshapes:0002:0001">주어진 함수 인수에 대해 할당되지 않은 텐서를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tensorforfunctionargumentfillknowndynamicshapes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:tensorforfunctionargumentfillknowndynamicshapes:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorforfunctionargumentfillknowndynamicshapes:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorforfunctionargumentfillknowndynamicshapes:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorforfunctionargumentfillknowndynamicshapes:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorforfunctionargumentfillknowndynamicshapes:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorforfunctionargumentfillknowndynamicshapes:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorforfunctionargumentfillknowndynamicshapes:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func tensor(forFunction function: String? = nil, argument: String, fillKnownDynamicShapes: Bool) -> BNNSTensor?
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>function</code>: 함수입니다. 그래프에 함수가 하나만 있는 경우 <code>nil</code>로 지정할 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>argument</code>: 입력 또는 출력 인수의 이름입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>fillKnownDynamicShapes</code>: 함수가 컨텍스트의 다음 실행에서 동적 크기를 교체해야 하는지를 지정하는 <code>Boolean</code> 값입니다. BNNS는 이러한 크기를 소스 모델의 기본 크기에서, 또는 이전의 <a href="bnnsgraph/context/setdynamicshapes(_:forfunction:">@@TOKEN_2@@</a>.md) 또는 <code>/Accelerate/BNNSGraph/Context/setBatchSize(_:forFunction:)</code> 호출에서 유도합니다. BNNS가 크기를 유도하지 못하면 이 함수는 차원을 <code>-1</code>로 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsgraphcontextgettensor(_:_:_:_:_:">func BNNSGraphContextGetTensor(bnns_graph_context_t, UnsafePointer&lt;CChar&gt;?, UnsafePointer&lt;CChar&gt;, Bool, UnsafeMutablePointer&lt;BNNSTensor&gt;) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 함수 인수의 텐서 속성을 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/context/tensor(forfunction:argument:fillknowndynamicshapes:">Apple Developer에서 보기</a>)*</span>
