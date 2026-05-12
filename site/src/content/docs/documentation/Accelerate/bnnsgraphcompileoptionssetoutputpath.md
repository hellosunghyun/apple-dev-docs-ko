---
source_path: "documentation/Accelerate/bnnsgraphcompileoptionssetoutputpath.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraphcompileoptionssetoutputpath"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsgraphcompileoptionssetoutputpath:0000:0001">BNNSGraphCompileOptionsSetOutputPath(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcompileoptionssetoutputpath:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcompileoptionssetoutputpath:0002:0001">그래프 컴파일이 그래프 개체를 지정한 파일에 직접 생성하도록 하는 옵션을 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcompileoptionssetoutputpath:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompileoptionssetoutputpath:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompileoptionssetoutputpath:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompileoptionssetoutputpath:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompileoptionssetoutputpath:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompileoptionssetoutputpath:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompileoptionssetoutputpath:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcompileoptionssetoutputpath:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSGraphCompileOptionsSetOutputPath(_ options: bnns_graph_compile_options_t, _ path: UnsafePointer<CChar>?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 옵션은 그래프 <a href="bnnsgraphcompilefromfile(_:_:_:">@@TOKEN_0@@</a>.md)가 반환하는 개체를 읽기 전용 메모리 매핑 파일로 지정할 때 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 옵션은 BNNS가 그래프 가중치의 전체 집합을 메모리에 상주시킬 필요가 없으므로 컴파일에 필요한 메모리를 줄입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">생성된 파일의 권한은 0600입니다(사용자만 읽기 및 쓰기 가능).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">참고로 <a href="bnnsgraphcompileoptionssetoutputfd(_:_:">@@TOKEN_0@@</a>.md) 함수는 이 옵션을 덮어씁니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>options</code>: 컴파일 옵션 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>path</code>: 대상 파일 경로입니다. <code>nil</code>을 전달하면 기본 동작인 엄격한 메모리 내 그래프 생성으로 되돌립니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnns_graph_compile_options_t.md">struct bnns_graph_compile_options_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">BNNS가 소스 mlmodelc 파일을 그래프 객체로 컴파일할 때 사용하는 컴파일 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnsgraphcompileoptionsmakedefault(">func BNNSGraphCompileOptionsMakeDefault() -&gt; bnns_graph_compile_options_t</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">기본값이 설정된 컴파일 옵션 객체를 할당해 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnsgraphcompileoptionsdestroy(_:">func BNNSGraphCompileOptionsDestroy(bnns_graph_compile_options_t)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">지정한 컴파일 옵션 객체를 삭제합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnsgraphcompileoptionsgetoutputpath(_:">func BNNSGraphCompileOptionsGetOutputPath(bnns_graph_compile_options_t) -&gt; UnsafePointer&lt;CChar&gt;?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">컴파일된 그래프의 출력 경로 옵션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnnsgraphcompileoptionssetoutputfd(_:_:">func BNNSGraphCompileOptionsSetOutputFD(bnns_graph_compile_options_t, Int32)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">컴파일 옵션을 설정하여 그래프 객체를 지정한 파일 디스크립터로 직접 생성하도록 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnnsgraphcompileoptionsgetoutputfd(_:">func BNNSGraphCompileOptionsGetOutputFD(bnns_graph_compile_options_t) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">컴파일된 그래프의 출력 파일 디스크립터 옵션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnnsgraphcompileoptionssettargetsinglethread(_:_:">func BNNSGraphCompileOptionsSetTargetSingleThread(bnns_graph_compile_options_t, Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">컴파일된 그래프를 단일 스레드로 실행하도록 옵션을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnsgraphcompileoptionsgettargetsinglethread(_:">func BNNSGraphCompileOptionsGetTargetSingleThread(bnns_graph_compile_options_t) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">컴파일된 그래프를 단일 스레드로 실행하도록 설정된 옵션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="bnnsgraphcompileoptionssetoptimizationpreference(_:_:">func BNNSGraphCompileOptionsSetOptimizationPreference(bnns_graph_compile_options_t, BNNSGraphOptimizationPreference)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">컴파일된 그래프를 크기 또는 성능 중 하나로 최적화하도록 옵션을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnnsgraphcompileoptionsgetoptimizationpreference(_:">func BNNSGraphCompileOptionsGetOptimizationPreference(bnns_graph_compile_options_t) -&gt; BNNSGraphOptimizationPreference</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">컴파일된 그래프를 크기 또는 성능 중 하나로 최적화하도록 설정된 옵션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="bnnsgraphoptimizationpreference.md">struct BNNSGraphOptimizationPreference</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">컴파일 최적화 기본 설정을 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="bnnsgraphcompileoptionssetgeneratedebuginfo(_:_:">func BNNSGraphCompileOptionsSetGenerateDebugInfo(bnns_graph_compile_options_t, Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">컴파일된 그래프에 디버깅 정보를 포함하도록 옵션을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="bnnsgraphcompileoptionsgetgeneratedebuginfo(_:">func BNNSGraphCompileOptionsGetGenerateDebugInfo(bnns_graph_compile_options_t) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">컴파일된 그래프에 디버깅 정보를 포함하도록 설정된 옵션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="bnnstargetsystemgeneric.md">var BNNSTargetSystemGeneric: BNNSTargetSystem</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraphcompileoptionssetoutputpath(_:_:">View on Apple Developer</a>)*</span>
