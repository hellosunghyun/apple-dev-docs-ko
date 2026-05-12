---
source_path: "documentation/Accelerate/bnns-graph-context-t.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns-graph-context-t"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsgraphcontextt:0000:0001">bnns_graph_context_t</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcontextt:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcontextt:0002:0001">컴파일된 그래프 객체를 래핑하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcontextt:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextt:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextt:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextt:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextt:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextt:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextt:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextt:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct bnns_graph_context_t
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><a href="bnns_graph_context_t.md">@@TOKEN_0@@</a> 객체는 <a href="bnns_graph_t.md">@@TOKEN_1@@</a> 인스턴스를 래핑하고 가변 데이터 저장소를 추가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">BNNS는 동적 형태와 기타 실행 객체를 지원하려면 가변성이 필요합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">컨텍스트 수명 동안 기본 <a href="bnns_graph_t.md">@@TOKEN_0@@</a> 인스턴스가 유효하게 유지되도록 확인해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializing-a-context:0011:0001">컨텍스트 초기화</span>

- <span class="ko-segment" data-segment-id="seg:list:initializing-a-context:0012:0001"><a href="bnns_graph_context_t/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializing-a-context:0013:0001">빈 그래프 컨텍스트 구조를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializing-a-context:0014:0001"><a href="bnns_graph_context_t/init(data:size:">init(data: UnsafeMutableRawPointer?, size: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializing-a-context:0015:0001">지정된 불투명 그래프 컨텍스트 객체에서 그래프 컨텍스트 구조를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:specifying-a-contexts-properties:0016:0001">컨텍스트의 속성 지정</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-a-contexts-properties:0017:0001"><a href="bnns_graph_context_t/data.md">var data: UnsafeMutableRawPointer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-a-contexts-properties:0018:0001">불투명 그래프 컨텍스트 객체에 대한 포인터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-a-contexts-properties:0019:0001"><a href="bnns_graph_context_t/size.md">var size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-a-contexts-properties:0020:0001">불투명 그래프 컨텍스트 객체의 바이트 크기입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0021:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnnsgraphcontextmake(_:">func BNNSGraphContextMake(bnns_graph_t) -&gt; bnns_graph_context_t</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">지정된 그래프에서 할당되고 초기화된 그래프 컨텍스트를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnnsgraphcontextmakestreaming(_:_:_:_:">func BNNSGraphContextMakeStreaming(bnns_graph_t, UnsafePointer&lt;CChar&gt;?, Int, UnsafePointer&lt;BNNSTensor&gt;?) -&gt; bnns_graph_context_t</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">지정된 그래프에서 스트리밍 지원과 함께 할당되고 초기화된 그래프 컨텍스트를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnsgraphcontextdestroy(_:">func BNNSGraphContextDestroy(bnns_graph_context_t)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">지정된 그래프 컨텍스트를 삭제합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns_graph_context_t">View on Apple Developer</a>*</span>
