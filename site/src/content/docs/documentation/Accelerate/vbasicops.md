---
source_path: "documentation/Accelerate/vbasicops.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vbasicops"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vbasicops:0000:0001">vBasicOps</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vbasicops:0001:0001">**Framework**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vbasicops:0002:0001">Perform basic arithmetic and logical functions on 128-bit vectors.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">vBasicOps.h declares a set of basic arithmetic and logical functions on 128-bit vectors, using the integer types from vecLibTypes.h.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">함수 이름은 <code>v</code>로 시작하고, 연산 유형을 나타내는 니모닉(예: 부호 있는 경우 <code>S</code>, 부호 없는 경우 <code>U</code>), 그 다음 연산 폭, 그리고 연산 이름이 이어집니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0002">예를 들어 <code>vS8Divide</code>는 128비트 벡터에 패킹된 부호 있는 8비트 값의 나눗셈을 수행합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0006:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:shift-and-rotate-functions-from-vbasicopsh:0007:0001">이동 및 회전 함수(vBasicOps.h)</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0008:0001"><a href="vll128shift(_:_:">func vLL128Shift(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0009:0001">128비트 논리적 왼쪽 시프트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0010:0001"><a href="vlr128shift(_:_:">func vLR128Shift(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0011:0001">128비트 논리적 오른쪽 시프트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0012:0001"><a href="vll64shift(_:_:">func vLL64Shift(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0013:0001">64비트 논리적 왼쪽 시프트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0014:0001"><a href="vll64shift2(_:_:">func vLL64Shift2(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0015:0001">두 개의 시프트 계수를 사용하는 64비트 논리적 왼쪽 시프트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0016:0001"><a href="vlr64shift(_:_:">func vLR64Shift(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0017:0001">64비트 논리적 오른쪽 시프트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0018:0001"><a href="vlr64shift2(_:_:">func vLR64Shift2(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0019:0001">두 개의 시프트 계수를 사용하는 64비트 논리적 오른쪽 시프트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0020:0001"><a href="va64shift(_:_:">func vA64Shift(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0021:0001">64비트 산술(부호 있음) 시프트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0022:0001"><a href="va64shift2(_:_:">func vA64Shift2(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0023:0001">두 개의 시프트 계수를 사용하는 64비트 산술(부호 있음) 시프트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0024:0001"><a href="va128shift(_:_:">func vA128Shift(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0025:0001">128비트 산술(부호 있음) 시프트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0026:0001"><a href="vl64rotate(_:_:">func vL64Rotate(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0027:0001">64비트 왼쪽 회전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0028:0001"><a href="vr64rotate(_:_:">func vR64Rotate(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0029:0001">64비트 오른쪽 회전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0030:0001"><a href="vl64rotate2(_:_:">func vL64Rotate2(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0031:0001">두 개의 회전 계수를 사용하는 64비트 왼쪽 회전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0032:0001"><a href="vr64rotate2(_:_:">func vR64Rotate2(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0033:0001">두 개의 회전 계수를 사용하는 64비트 오른쪽 회전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0034:0001"><a href="vl128rotate(_:_:">func vL128Rotate(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0035:0001">128비트 왼쪽 회전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shift-and-rotate-functions-from-vbasicopsh:0036:0001"><a href="vr128rotate(_:_:">func vR128Rotate(vUInt32, vUInt8) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shift-and-rotate-functions-from-vbasicopsh:0037:0001">128비트 오른쪽 회전입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:integer-arithmetic-functions-from-vbasicopsh:0038:0001">정수 산술 함수(vBasicOps.h)</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0039:0001"><a href="vu64adds(_:_:">func vU64AddS(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0040:0001">포화(클리핑) 처리된 부호 없는 64비트 덧셈입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0041:0001"><a href="vs64adds(_:_:">func vS64AddS(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0042:0001">포화(클리핑) 처리된 부호 있는 64비트 덧셈입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0043:0001"><a href="vu128add(_:_:">func vU128Add(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0044:0001">부호 없는 128비트 덧셈의 모듈러 산술입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0045:0001"><a href="vu128adds(_:_:">func vU128AddS(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0046:0001">포화(클리핑) 처리된 부호 없는 128비트 덧셈입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0047:0001"><a href="vs128add(_:_:">func vS128Add(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0048:0001">부호 있는 128비트 덧셈의 모듈러 산술입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0049:0001"><a href="vs128adds(_:_:">func vS128AddS(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0050:0001">포화(클리핑) 처리된 부호 있는 128비트 덧셈입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0051:0001"><a href="vu64subs(_:_:">func vU64SubS(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0052:0001">포화(클리핑) 처리된 부호 없는 64비트 뺄셈입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0053:0001"><a href="vs64subs(_:_:">func vS64SubS(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0054:0001">포화(클리핑) 처리된 부호 있는 64비트 뺄셈입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0055:0001"><a href="vu128sub(_:_:">func vU128Sub(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0056:0001">부호 없는 128비트 뺄셈의 모듈러 산술입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0057:0001"><a href="vu128subs(_:_:">func vU128SubS(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0058:0001">포화(클리핑) 처리된 부호 없는 128비트 뺄셈입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0059:0001"><a href="vs128sub(_:_:">func vS128Sub(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0060:0001">부호 있는 128비트 뺄셈의 모듈러 산술입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0061:0001"><a href="vs128subs(_:_:">func vS128SubS(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0062:0001">포화(클리핑) 처리된 부호 있는 128비트 뺄셈입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0063:0001"><a href="vu8halfmultiply(_:_:">func vU8HalfMultiply(vUInt8, vUInt8) -&gt; vUInt8</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0064:0001">부호 없는 8비트 곱셈입니다. 곱셈 결과는 피연산자와 동일한 폭입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0065:0001"><a href="vs8halfmultiply(_:_:">func vS8HalfMultiply(vSInt8, vSInt8) -&gt; vSInt8</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0066:0001">Signed 8-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0067:0001"><a href="vu32halfmultiply(_:_:">func vU32HalfMultiply(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0068:0001">Unsigned 32-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0069:0001"><a href="vs32halfmultiply(_:_:">func vS32HalfMultiply(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0070:0001">Signed 32-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0071:0001"><a href="vu64halfmultiply(_:_:">func vU64HalfMultiply(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0072:0001">Unsigned 64-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0073:0001"><a href="vs64halfmultiply(_:_:">func vS64HalfMultiply(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0074:0001">Signed 64-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0075:0001"><a href="vu128halfmultiply(_:_:">func vU128HalfMultiply(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0076:0001">Unsigned 128-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0077:0001"><a href="vs128halfmultiply(_:_:">func vS128HalfMultiply(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0078:0001">Signed 128-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0079:0001"><a href="vu32fullmuleven(_:_:">func vU32FullMulEven(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0080:0001">Unsigned 32-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used.</span> <span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0080:0002">Note the big-endian convention: the leftmost element is element 0.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0081:0001"><a href="vu32fullmulodd(_:_:">func vU32FullMulOdd(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0082:0001">Unsigned 32-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used.</span> <span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0082:0002">Note the big-endian convention: the leftmost element is element 0.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0083:0001"><a href="vs32fullmuleven(_:_:">func vS32FullMulEven(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0084:0001">Signed 32-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used.</span> <span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0084:0002">Note the big-endian convention: the leftmost element is element 0.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0085:0001"><a href="vs32fullmulodd(_:_:">func vS32FullMulOdd(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0086:0001">Signed 32-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used.</span> <span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0086:0002">Note the big-endian convention: the leftmost element is element 0.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0087:0001"><a href="vu64fullmuleven(_:_:">func vU64FullMulEven(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0088:0001">Unsigned 64-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used.</span> <span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0088:0002">Note the big-endian convention: the leftmost element is element 0.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0089:0001"><a href="vu64fullmulodd(_:_:">func vU64FullMulOdd(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0090:0001">Unsigned 64-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used.</span> <span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0090:0002">Note the big-endian convention: the leftmost element is element 0.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0091:0001"><a href="vs64fullmuleven(_:_:">func vS64FullMulEven(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0092:0001">Signed 64-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used.</span> <span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0092:0002">Note the big-endian convention: the leftmost element is element 0.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0093:0001"><a href="vs64fullmulodd(_:_:">func vS64FullMulOdd(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0094:0001">Signed 64-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used.</span> <span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0094:0002">Note the big-endian convention: the leftmost element is element 0.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0095:0001"><a href="vu8divide(_:_:_:">func vU8Divide(vUInt8, vUInt8, UnsafeMutablePointer&lt;vUInt8&gt;?) -&gt; vUInt8</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0096:0001">Unsigned 8-bit division.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0097:0001"><a href="vs8divide(_:_:_:">func vS8Divide(vSInt8, vSInt8, UnsafeMutablePointer&lt;vSInt8&gt;?) -&gt; vSInt8</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0098:0001">Signed 8-bit division.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0099:0001"><a href="vu16divide(_:_:_:">func vU16Divide(vUInt16, vUInt16, UnsafeMutablePointer&lt;vUInt16&gt;?) -&gt; vUInt16</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0100:0001">Unsigned 16-bit division.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0101:0001"><a href="vs16divide(_:_:_:">func vS16Divide(vSInt16, vSInt16, UnsafeMutablePointer&lt;vSInt16&gt;?) -&gt; vSInt16</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0102:0001">Signed 16-bit division.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0103:0001"><a href="vu32divide(_:_:_:">func vU32Divide(vUInt32, vUInt32, UnsafeMutablePointer&lt;vUInt32&gt;?) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0104:0001">Unsigned 32-bit division.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0105:0001"><a href="vs32divide(_:_:_:">func vS32Divide(vSInt32, vSInt32, UnsafeMutablePointer&lt;vSInt32&gt;?) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0106:0001">Signed 32-bit division.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0107:0001"><a href="vu64divide(_:_:_:">func vU64Divide(vUInt32, vUInt32, UnsafeMutablePointer&lt;vUInt32&gt;?) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0108:0001">Unsigned 64-bit division.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0109:0001"><a href="vs64divide(_:_:_:">func vS64Divide(vSInt32, vSInt32, UnsafeMutablePointer&lt;vSInt32&gt;?) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0110:0001">Signed 64-bit division.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0111:0001"><a href="vu128divide(_:_:_:">func vU128Divide(vUInt32, vUInt32, UnsafeMutablePointer&lt;vUInt32&gt;?) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0112:0001">Unsigned 128-bit division.</span>

- <span class="ko-segment" data-segment-id="seg:list:integer-arithmetic-functions-from-vbasicopsh:0113:0001"><a href="vs128divide(_:_:_:">func vS128Divide(vSInt32, vSInt32, UnsafeMutablePointer&lt;vSInt32&gt;?) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0114:0001">Signed 128-bit division.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:integer-arithmetic-functions-from-vbasicopsh:0116:0001">*<a href="https://developer.apple.com/documentation/accelerate/vbasicops">View on Apple Developer</a>*</span>
