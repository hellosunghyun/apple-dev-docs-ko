---
source_path: "documentation/Accelerate/bnnsgraph/context/setdynamicshapes-forfunction.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/context/setdynamicshapes-forfunction"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setdynamicshapesforfunction:0000:0001">setDynamicShapes(_:forFunction:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdynamicshapesforfunction:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdynamicshapesforfunction:0002:0001">그래프의 동적 형상을 지정하고, 가능한 경우 출력 형상을 추론합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdynamicshapesforfunction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setdynamicshapesforfunction:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdynamicshapesforfunction:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdynamicshapesforfunction:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdynamicshapesforfunction:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdynamicshapesforfunction:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdynamicshapesforfunction:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdynamicshapesforfunction:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setDynamicShapes(_ shapes: [BNNSGraph.Shape], forFunction function: String? = nil) async throws -> [BNNSGraph.Shape]
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>shapes</code>: <a href="bnnsgraphcontextexecute(_:_:_:_:_:_:">@@TOKEN_1@@</a>.md)에 전달하는 순서와 동일한 순서로 입력 형상을 나열한 배열입니다. 이 함수는 차원이 0이 아닌 입력 형상을 읽고, 차원이 0인 입력 형상에는 소스 모델의 상수값 또는 기본값을 사용합니다. 소스 모델과 일치하지 않는 0이 아닌 값의 형상에 대해 이 함수는 오류를 생성합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>function</code>: 함수입니다. 그래프에 함수가 하나만 포함되어 있으면 <code>nil</code>로 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsgraphcontextsetdynamicshapes(_:_:_:_:">func BNNSGraphContextSetDynamicShapes(bnns_graph_context_t, UnsafePointer&lt;CChar&gt;?, Int, UnsafeMutablePointer&lt;bnns_graph_shape_t&gt;) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">그래프의 동적 형상을 지정하고, 가능한 경우 출력 형상을 추론합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsgraph/shape.md">BNNSGraph.Shape</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">인수의 형상 명세입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsgraph/context/argumentcount(forfunction:">func argumentCount(forFunction: String?) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">주어진 함수 인수의 인수 개수를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[func argumentNames(forFunction: String?) -&gt; [String]](bnnsgraph/context/argumentnames(forfunction:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">주어진 함수 인수의 인수 이름을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsgraph/context/argumentposition(forfunction:argument:">func argumentPosition(forFunction: String?, argument: String) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">주어진 함수 인수에 대한 인수 배열의 인덱스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsgraph/context/functioncount.md">var functionCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정한 함수의 입력 인수 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[var functionNames: [String]](bnnsgraph/context/functionnames.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">그래프에서 호출 가능한 함수의 이름을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsgraph/context/checkfornansandinfinities.md">var checkForNaNsAndInfinities: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">컨텍스트가 중간 텐서를 NaN과 infinity 값에 대해 검사하는지 지정하는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/context/setdynamicshapes(_:forfunction:">View on Apple Developer</a>)*</span>
