---
source_path: "documentation/Accelerate/bnnscreaterandomgeneratorwithseed.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnscreaterandomgeneratorwithseed"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnscreaterandomgeneratorwithseed:0000:0001">BNNSCreateRandomGeneratorWithSeed(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnscreaterandomgeneratorwithseed:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnscreaterandomgeneratorwithseed:0002:0001">Returns a new random number generator using the specified seed.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnscreaterandomgeneratorwithseed:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnscreaterandomgeneratorwithseed:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscreaterandomgeneratorwithseed:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscreaterandomgeneratorwithseed:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscreaterandomgeneratorwithseed:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscreaterandomgeneratorwithseed:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscreaterandomgeneratorwithseed:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscreaterandomgeneratorwithseed:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSCreateRandomGeneratorWithSeed(_ method: BNNSRandomGeneratorMethod, _ seed: UInt64, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSRandomGenerator?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">현재 기기에서 ARKit 얼굴 추적이 지원되지 않으면 <code>nil</code>을 반환하는 얼굴 기하 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>method</code>: The method that the generator uses to generate random numbers.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>seed</code>: The random seed that this function uses to initialize the generator.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>filter_params</code>: The filter runtime parameters.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/randomgenerator.md">class RandomGenerator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A random number generator.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnscreaterandomgenerator(_:_:">func BNNSCreateRandomGenerator(BNNSRandomGeneratorMethod, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSRandomGenerator?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Returns a new random number generator using an internally generated random seed.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsrandomgeneratormethod.md">struct BNNSRandomGeneratorMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Constants that describe random number generation methods.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsrandomgenerator.md">typealias BNNSRandomGenerator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A pointer to a random number generator object.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsrandomfilluniformint(_:_:_:_:">func BNNSRandomFillUniformInt(BNNSRandomGenerator?, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int64, Int64) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Fills the specified tensor with random integer values from the continuous uniform distribution within a range.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsrandomfilluniformfloat(_:_:_:_:">func BNNSRandomFillUniformFloat(BNNSRandomGenerator?, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsrandomfillnormalfloat(_:_:_:_:">func BNNSRandomFillNormalFloat(BNNSRandomGenerator?, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Fills the specified tensor with random floating-point values mapped to a normal distribution.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsrandomfillcategoricalfloat(_:_:_:_:">func BNNSRandomFillCategoricalFloat(BNNSRandomGenerator?, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Bool) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Fills the specified tensor with random values from the categorical distributions with the given event probabilities.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsrandomgeneratorstatesize(_:">func BNNSRandomGeneratorStateSize(BNNSRandomGenerator?) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Returns the state size, in bytes, of a random number generator.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnsrandomgeneratorgetstate(_:_:_:">func BNNSRandomGeneratorGetState(BNNSRandomGenerator?, Int, UnsafeMutableRawPointer) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Returns the state of a random number generator.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnsrandomgeneratorsetstate(_:_:_:">func BNNSRandomGeneratorSetState(BNNSRandomGenerator?, Int, UnsafeMutableRawPointer) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Sets the state of a random number generator.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnsdestroyrandomgenerator(_:">func BNNSDestroyRandomGenerator(BNNSRandomGenerator?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Destroys a random number generator.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnscreaterandomgeneratorwithseed(_:_:_:">View on Apple Developer</a>)*</span>
