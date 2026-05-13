---
source_path: "documentation/Accelerate/bnns-graph-compile-message-fn-t.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns-graph-compile-message-fn-t"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsgraphcompilemessagefnt:0000:0001">bnns_graph_compile_message_fn_t</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcompilemessagefnt:0001:0001">**Framework**: Accelerate **Kind**: typealias</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcompilemessagefnt:0002:0001">그래프 컴파일 메시지 로깅 콜백 함수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcompilemessagefnt:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompilemessagefnt:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompilemessagefnt:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompilemessagefnt:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompilemessagefnt:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompilemessagefnt:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompilemessagefnt:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompilemessagefnt:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
typealias bnns_graph_compile_message_fn_t = (BNNSGraphMessageLevel, UnsafePointer<CChar>, UnsafePointer<CChar>?, UnsafeMutablePointer<bnns_user_message_data_t>?) -> Void
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsgraphcompileoptionssetmessagelogmask(_:_:">func BNNSGraphCompileOptionsSetMessageLogMask(bnns_graph_compile_options_t, UInt32)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">컴파일 시간 메시지에 대한 마스크를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsgraphcontextsetmessagelogmask(_:_:">func BNNSGraphContextSetMessageLogMask(bnns_graph_context_t, UInt32) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">로그 메시지(<code>os_log</code> 또는 사용자 지정 콜백으로) 기록되는 항목에 대한 마스크를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsgraphmessagelevel.md">struct BNNSGraphMessageLevel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">컴파일 시간 메시지의 마스크를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsgraphcompileoptionssetmessagelogcallback(_:_:_:">func BNNSGraphCompileOptionsSetMessageLogCallback(bnns_graph_compile_options_t, bnns_graph_compile_message_fn_t, UnsafeMutablePointer&lt;bnns_user_message_data_t&gt;?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">컴파일 시간 메시지를 보고하는 사용자 지정 콜백 함수를 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns_user_message_data_t.md">struct bnns_user_message_data_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">메시지 로깅 콜백을 위한 추가 사용자 정의 로깅 인수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns_graph_compile_message_fn_t">View on Apple Developer</a>*</span>
