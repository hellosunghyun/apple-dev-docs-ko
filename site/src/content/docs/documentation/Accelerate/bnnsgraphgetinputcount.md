---
source_path: "documentation/Accelerate/bnnsgraphgetinputcount.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraphgetinputcount"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsgraphgetinputcount:0000:0001">BNNSGraphGetInputCount(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphgetinputcount:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphgetinputcount:0002:0001">주어진 함수 인수의 입력 인수 개수를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphgetinputcount:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetinputcount:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetinputcount:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetinputcount:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetinputcount:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetinputcount:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetinputcount:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetinputcount:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSGraphGetInputCount(_ graph: bnns_graph_t, _ function: UnsafePointer<CChar>?) -> Int
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">입력 인수의 개수이며, 쿼리가 실패하면 <code>SIZE_T_MAX</code>가 반환됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>graph</code>: 컴파일된 그래프 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>function</code>: 함수입니다. 그래프에 함수가 하나만 포함된 경우 <code>nil</code>로 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsgraphgetargumentintents(_:_:_:_:">func BNNSGraphGetArgumentIntents(bnns_graph_t, UnsafePointer&lt;CChar&gt;?, Int, UnsafeMutablePointer&lt;BNNSGraphArgumentIntent&gt;) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">주어진 함수 인수의 인수 의도를 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsgraphargumentintent.md">struct BNNSGraphArgumentIntent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">인수 intent를 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsgraphgetargumentcount(_:_:">func BNNSGraphGetArgumentCount(bnns_graph_t, UnsafePointer&lt;CChar&gt;?) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">주어진 함수 인수의 인수 개수를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsgraphgetargumentnames(_:_:_:_:">func BNNSGraphGetArgumentNames(bnns_graph_t, UnsafePointer&lt;CChar&gt;?, Int, UnsafeMutablePointer&lt;UnsafePointer&lt;CChar&gt;?&gt;) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">주어진 함수 인수의 이름을 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsgraphgetfunctioncount(_:">func BNNSGraphGetFunctionCount(bnns_graph_t) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 그래프의 호출 가능한 함수 개수를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsgraphgetfunctionnames(_:_:_:">func BNNSGraphGetFunctionNames(bnns_graph_t, Int, UnsafeMutablePointer&lt;UnsafePointer&lt;CChar&gt;?&gt;) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">그래프에서 호출 가능한 함수의 이름을 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsgraphgetinputnames(_:_:_:_:">func BNNSGraphGetInputNames(bnns_graph_t, UnsafePointer&lt;CChar&gt;?, Int, UnsafeMutablePointer&lt;UnsafePointer&lt;CChar&gt;?&gt;) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">주어진 함수 인수의 입력 인수 이름을 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsgraphgetoutputcount(_:_:">func BNNSGraphGetOutputCount(bnns_graph_t, UnsafePointer&lt;CChar&gt;?) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">주어진 함수 인수의 출력 인수 개수를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsgraphgetoutputnames(_:_:_:_:">func BNNSGraphGetOutputNames(bnns_graph_t, UnsafePointer&lt;CChar&gt;?, Int, UnsafeMutablePointer&lt;UnsafePointer&lt;CChar&gt;?&gt;) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">주어진 함수 인수의 출력 인수 이름을 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnsgraphgetargumentposition(_:_:_:">func BNNSGraphGetArgumentPosition(bnns_graph_t, UnsafePointer&lt;CChar&gt;?, UnsafePointer&lt;CChar&gt;) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">주어진 함수 인수에 대한 인수 배열의 인덱스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnsgraphgetargumentinterleavefactors(_:_:_:_:_:">func BNNSGraphGetArgumentInterleaveFactors(bnns_graph_t, UnsafePointer&lt;CChar&gt;?, Int, UnsafeMutablePointer&lt;UnsafePointer&lt;UInt16&gt;?&gt;, UnsafeMutablePointer&lt;Int&gt;) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">있는 경우 인수의 인터리브 계수를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraphgetinputcount(_:_:">View on Apple Developer</a>)*</span>
