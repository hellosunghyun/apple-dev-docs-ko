---
source_path: "documentation/Accelerate/bnnsgraphoptimizationpreference.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraphoptimizationpreference"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsgraphoptimizationpreference:0000:0001">BNNSGraphOptimizationPreference</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphoptimizationpreference:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphoptimizationpreference:0002:0001">Constants that describe the compilation optimization preference.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphoptimizationpreference:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphoptimizationpreference:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphoptimizationpreference:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphoptimizationpreference:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphoptimizationpreference:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphoptimizationpreference:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphoptimizationpreference:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphoptimizationpreference:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSGraphOptimizationPreference
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:optimization-preferences:0008:0001">Optimization preferences</span>

- <span class="ko-segment" data-segment-id="seg:list:optimization-preferences:0009:0001"><a href="bnnsgraphoptimizationpreference/init(_:">init(UInt32)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimization-preferences:0010:0001">Creates a new instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:optimization-preferences:0011:0001"><a href="bnnsgraphoptimizationpreference/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimization-preferences:0012:0001">Creates a new instance with the specified raw value.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0013:0001">Instance properties</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0014:0001"><a href="bnnsgraphoptimizationpreference/rawvalue.md">var rawValue: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0015:0001">The corresponding value of the raw type.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0016:0001"><a href="bnnsgraphoptimizationpreferenceirsize.md">var BNNSGraphOptimizationPreferenceIRSize: BNNSGraphOptimizationPreference</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0017:0001">A constant that specifies compilation optimization for smallest graph size on disk.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0018:0001"><a href="bnnsgraphoptimizationpreferenceperformance.md">var BNNSGraphOptimizationPreferencePerformance: BNNSGraphOptimizationPreference</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0019:0001">A constant that specifies compilation optimization for best execution performance.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0020:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0021:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0005"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0023:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnns_graph_compile_options_t.md">struct bnns_graph_compile_options_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">내보내기 과정이 생성하는 임시 파일을 저장할 수 있는 디렉터리입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsgraphcompileoptionsmakedefault(">func BNNSGraphCompileOptionsMakeDefault() -&gt; bnns_graph_compile_options_t</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Returns an allocated compilation options object with default values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsgraphcompileoptionsdestroy(_:">func BNNSGraphCompileOptionsDestroy(bnns_graph_compile_options_t)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Destroys the specified compilation options object.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnsgraphcompileoptionssetoutputpath(_:_:">func BNNSGraphCompileOptionsSetOutputPath(bnns_graph_compile_options_t, UnsafePointer&lt;CChar&gt;?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Sets the option for graph compilation to generate the graph object directly to the specified file.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnsgraphcompileoptionsgetoutputpath(_:">func BNNSGraphCompileOptionsGetOutputPath(bnns_graph_compile_options_t) -&gt; UnsafePointer&lt;CChar&gt;?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Returns the option for the compiled graph’s output path.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnsgraphcompileoptionssetoutputfd(_:_:">func BNNSGraphCompileOptionsSetOutputFD(bnns_graph_compile_options_t, Int32)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Sets the option for graph compilation to generate the graph object directly to the specified file descriptor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnsgraphcompileoptionsgetoutputfd(_:">func BNNSGraphCompileOptionsGetOutputFD(bnns_graph_compile_options_t) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Returns the option for the compiled graph’s output file descriptor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="bnnsgraphcompileoptionssettargetsinglethread(_:_:">func BNNSGraphCompileOptionsSetTargetSingleThread(bnns_graph_compile_options_t, Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Sets the option for the compiled graph to execute on a single thread.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="bnnsgraphcompileoptionsgettargetsinglethread(_:">func BNNSGraphCompileOptionsGetTargetSingleThread(bnns_graph_compile_options_t) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Returns the option for the compiled graph to execute on a single thread.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="bnnsgraphcompileoptionssetoptimizationpreference(_:_:">func BNNSGraphCompileOptionsSetOptimizationPreference(bnns_graph_compile_options_t, BNNSGraphOptimizationPreference)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Sets the option for the compiled graph to optimize for either size or performance.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="bnnsgraphcompileoptionsgetoptimizationpreference(_:">func BNNSGraphCompileOptionsGetOptimizationPreference(bnns_graph_compile_options_t) -&gt; BNNSGraphOptimizationPreference</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Returns the option for the compiled graph to optimize for either size or performance.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="bnnsgraphcompileoptionssetgeneratedebuginfo(_:_:">func BNNSGraphCompileOptionsSetGenerateDebugInfo(bnns_graph_compile_options_t, Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Sets the option for the compiled graph to include debugging information.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="bnnsgraphcompileoptionsgetgeneratedebuginfo(_:">func BNNSGraphCompileOptionsGetGenerateDebugInfo(bnns_graph_compile_options_t) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">Returns the option for the compiled graph to include debugging information.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="bnnstargetsystemgeneric.md">var BNNSTargetSystemGeneric: BNNSTargetSystem</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraphoptimizationpreference">View on Apple Developer</a>*</span>
