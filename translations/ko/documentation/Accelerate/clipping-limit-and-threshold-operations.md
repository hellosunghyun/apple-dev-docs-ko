---
source_path: "documentation/Accelerate/clipping-limit-and-threshold-operations.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/clipping-limit-and-threshold-operations"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:clipping-limit-and-threshold-operations:0000:0001">Clipping, limit, and threshold operations</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipping-limit-and-threshold-operations:0001:0001">**Framework**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipping-limit-and-threshold-operations:0002:0001">Apply clipping, limit, or threshold rules to the elements in a vector.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:clipping-operations:0004:0001">Clipping Operations</span>

- <span class="ko-segment" data-segment-id="seg:list:clipping-operations:0005:0001">[static func clip&lt;U&gt;(U, to: ClosedRange&lt;Double&gt;) -&gt; [Double]](vdsp/clip(_:to:)-8jsic.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipping-operations:0006:0001">Returns the elements of a double-precision vector clipped to the specified range.</span>

- <span class="ko-segment" data-segment-id="seg:list:clipping-operations:0007:0001">[static func clip&lt;U&gt;(U, to: ClosedRange&lt;Float&gt;) -&gt; [Float]](vdsp/clip(_:to:)-20gz4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipping-operations:0008:0001">Returns the elements of a single-precision vector clipped to the specified range.</span>

- <span class="ko-segment" data-segment-id="seg:list:clipping-operations:0009:0001"><a href="vdsp/clip(_:to:result:">static func clip&lt;U, V&gt;(U, to: ClosedRange&lt;Double&gt;, result: inout V)</a>-3lbii.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipping-operations:0010:0001">Calculates the elements of a double-precision vector clipped to the specified range.</span>

- <span class="ko-segment" data-segment-id="seg:list:clipping-operations:0011:0001"><a href="vdsp/clip(_:to:result:">static func clip&lt;U, V&gt;(U, to: ClosedRange&lt;Float&gt;, result: inout V)</a>-84zw9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipping-operations:0012:0001">Calculates the elements of a single-precision vector clipped to the specified range.</span>

- <span class="ko-segment" data-segment-id="seg:list:clipping-operations:0013:0001">[static func invertedClip&lt;U&gt;(U, to: ClosedRange&lt;Double&gt;) -&gt; [Double]](vdsp/invertedclip(_:to:)-8yqtl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipping-operations:0014:0001">Returns a double-precision vector that’s inverted-clipped to the specified range.</span>

- <span class="ko-segment" data-segment-id="seg:list:clipping-operations:0015:0001">[static func invertedClip&lt;U&gt;(U, to: ClosedRange&lt;Float&gt;) -&gt; [Float]](vdsp/invertedclip(_:to:)-4pkxw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipping-operations:0016:0001">Returns a single-precision vector that’s inverted-clipped to the specified range.</span>

- <span class="ko-segment" data-segment-id="seg:list:clipping-operations:0017:0001"><a href="vdsp/invertedclip(_:to:result:">static func invertedClip&lt;U, V&gt;(U, to: ClosedRange&lt;Double&gt;, result: inout V)</a>-5ioal.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipping-operations:0018:0001">Calculates a double-precision vector that’s inverted-clipped to the specified range.</span>

- <span class="ko-segment" data-segment-id="seg:list:clipping-operations:0019:0001"><a href="vdsp/invertedclip(_:to:result:">static func invertedClip&lt;U, V&gt;(U, to: ClosedRange&lt;Float&gt;, result: inout V)</a>-3q12m.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipping-operations:0020:0001">Calculates a single-precision vector that’s inverted-clipped to the specified range.</span>

### <span class="ko-segment" data-segment-id="seg:heading:limit-operations:0021:0001">Limit Operations</span>

- <span class="ko-segment" data-segment-id="seg:list:limit-operations:0022:0001">[static func limit&lt;U&gt;(U, limit: Double, withOutputConstant: Double) -&gt; [Double]](vdsp/limit(_:limit:withoutputconstant:)-2d9u6.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:limit-operations:0023:0001">Returns the double-precision vector test limit.</span>

- <span class="ko-segment" data-segment-id="seg:list:limit-operations:0024:0001">[static func limit&lt;U&gt;(U, limit: Float, withOutputConstant: Float) -&gt; [Float]](vdsp/limit(_:limit:withoutputconstant:)-8bj65.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:limit-operations:0025:0001">Returns the single-precision vector test limit.</span>

- <span class="ko-segment" data-segment-id="seg:list:limit-operations:0026:0001"><a href="vdsp/limit(_:limit:withoutputconstant:result:">static func limit&lt;U, V&gt;(U, limit: Double, withOutputConstant: Double, result: inout V)</a>-6apdv.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:limit-operations:0027:0001">Calculates the double-precision vector test limit.</span>

- <span class="ko-segment" data-segment-id="seg:list:limit-operations:0028:0001"><a href="vdsp/limit(_:limit:withoutputconstant:result:">static func limit&lt;U, V&gt;(U, limit: Float, withOutputConstant: Float, result: inout V)</a>-9v33v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:limit-operations:0029:0001">Calculates the single-precision vector test limit.</span>

### <span class="ko-segment" data-segment-id="seg:heading:threshold-operations:0030:0001">Threshold Operations</span>

- <span class="ko-segment" data-segment-id="seg:list:threshold-operations:0031:0001">[static func threshold&lt;U&gt;(U, to: Double, with: vDSP.ThresholdRule&lt;Double&gt;) -&gt; [Double]](vdsp/threshold(_:to:with:)-77g7l.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:threshold-operations:0032:0001">Returns the elements of the supplied double-precision vector after applying a specified thresholding rule.</span>

- <span class="ko-segment" data-segment-id="seg:list:threshold-operations:0033:0001">[static func threshold&lt;U&gt;(U, to: Float, with: vDSP.ThresholdRule&lt;Float&gt;) -&gt; [Float]](vdsp/threshold(_:to:with:)-534ob.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:threshold-operations:0034:0001">Returns the elements of the supplied single-precision vector after applying a specified thresholding rule.</span>

- <span class="ko-segment" data-segment-id="seg:list:threshold-operations:0035:0001"><a href="vdsp/threshold(_:to:with:result:">static func threshold&lt;U, V&gt;(U, to: Double, with: vDSP.ThresholdRule&lt;Double&gt;, result: inout V)</a>-45b58.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:threshold-operations:0036:0001">Calculates the elements of the supplied double-precision vector after applying a specified thresholding rule.</span>

- <span class="ko-segment" data-segment-id="seg:list:threshold-operations:0037:0001"><a href="vdsp/threshold(_:to:with:result:">static func threshold&lt;U, V&gt;(U, to: Float, with: vDSP.ThresholdRule&lt;Float&gt;, result: inout V)</a>-8137c.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:threshold-operations:0038:0001">Calculates the elements of the supplied single-precision vector after applying a specified thresholding rule.</span>

- <span class="ko-segment" data-segment-id="seg:list:threshold-operations:0039:0001"><a href="vdsp/thresholdrule.md">vDSP.ThresholdRule</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:threshold-operations:0040:0001">Constants that specify vector threshold rules.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0041:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="absolute-and-negation-functions.md">Absolute and negation functions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Compute the absolute or negated value of each element in a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="integration-functions.md">Integration functions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Compute the running sum, Simpson, or trapezoidal integration of a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="normalization-functions.md">Normalization functions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Compute the mean and standard deviation of a vector and calculate new elements to have a zero mean and a unit standard deviation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="phase-computation-functions.md">Phase computation functions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">Calculate the element-wise phase values, in radians, of a complex vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="complex-conjugation-functions.md">Complex conjugation functions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">Calculate the complex conjugate of the elements in a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0052:0001"><a href="vector-squaring-functions.md">Vector squaring functions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">Compute the square, signed square, or squared magnitude of the elements in a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0054:0001"><a href="fractional-part-extraction.md">Fractional part extraction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0055:0001">Truncate the elements of a vector to a fraction.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0056:0001"><a href="zero-crossing-search.md">Zero crossing search</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0057:0001">벡터에서 제로 크로싱 횟수를 계산하고 찾습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0059:0001">*<a href="https://developer.apple.com/documentation/accelerate/clipping-limit-and-threshold-operations">View on Apple Developer</a>*</span>
