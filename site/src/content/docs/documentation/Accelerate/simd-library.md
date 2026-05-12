---
source_path: "documentation/Accelerate/simd-library.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/simd-library"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:simd:0000:0001">simd</span>

<span class="ko-segment" data-segment-id="seg:paragraph:simd:0001:0001">**프레임워크**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:simd:0002:0001">작은 벡터와 행렬에 대한 계산을 수행합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">simd는 작은 벡터 및 행렬 계산을 위한 타입과 함수를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">타입에는 정수 및 부동 소수점 벡터와 행렬이 포함되며, 함수는 기본 산술 연산, 요소별 수학 연산, 기하학 및 선형 대수 연산을 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">simd는 단정밀도 값의 경우 최대 16개(배정밀도 값은 최대 8개) 요소를 포함하는 벡터와 최대 4 x 4 크기의 행렬을 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0002"><a href="vforce-library.md">@@TOKEN_0@@</a>와 같은 다른 프레임워크를 사용하면 더 큰 벡터로 작업할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0006:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:boolean-scalar-data-type:0007:0001">Boolean 스칼라 데이터 타입</span>

- <span class="ko-segment" data-segment-id="seg:list:boolean-scalar-data-type:0008:0001"><a href="../simd/simd_bool.md">typealias simd_bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:boolean-scalar-data-type:0009:0001">Boolean 스칼라 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:signed-integer-vectors:0010:0001">부호 있는 정수 벡터</span>

- <span class="ko-segment" data-segment-id="seg:list:signed-integer-vectors:0011:0001"><a href="8-bit-signed-integer-vectors.md">8비트 부호 있는 정수 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:signed-integer-vectors:0012:0001">부호 있는 8비트 정수 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:signed-integer-vectors:0013:0001"><a href="16-bit-signed-integer-vectors.md">16비트 부호 있는 정수 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:signed-integer-vectors:0014:0001">부호 있는 16비트 정수 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:signed-integer-vectors:0015:0001"><a href="32-bit-signed-integer-vectors.md">32비트 부호 있는 정수 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:signed-integer-vectors:0016:0001">부호 있는 32비트 정수 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:signed-integer-vectors:0017:0001"><a href="64-bit-signed-integer-vectors.md">64비트 부호 있는 정수 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:signed-integer-vectors:0018:0001">부호 있는 64비트 정수 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:unsigned-integer-vectors:0019:0001">부호 없는 정수 벡터</span>

- <span class="ko-segment" data-segment-id="seg:list:unsigned-integer-vectors:0020:0001"><a href="8-bit-unsigned-integer-vectors.md">8비트 부호 없는 정수 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:unsigned-integer-vectors:0021:0001">부호 없는 8비트 정수 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:unsigned-integer-vectors:0022:0001"><a href="16-bit-unsigned-integer-vectors.md">16비트 부호 없는 정수 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:unsigned-integer-vectors:0023:0001">부호 없는 16비트 정수 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:unsigned-integer-vectors:0024:0001"><a href="32-bit-unsigned-integer-vectors.md">32비트 부호 없는 정수 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:unsigned-integer-vectors:0025:0001">부호 없는 32비트 정수 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:unsigned-integer-vectors:0026:0001"><a href="64-bit-unsigned-integer-vectors.md">64비트 부호 없는 정수 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:unsigned-integer-vectors:0027:0001">부호 없는 64비트 정수 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:floating-point-vectors:0028:0001">부동 소수점 벡터</span>

- <span class="ko-segment" data-segment-id="seg:list:floating-point-vectors:0029:0001"><a href="working-with-vectors.md">벡터 사용하기</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:floating-point-vectors:0030:0001">벡터를 사용해 기하학적 값을 계산하고, 점곱과 외적을 계산하며, 값 사이를 보간합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:floating-point-vectors:0031:0001"><a href="half-precision-floating-point-vectors.md">반정밀도 부동 소수점 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:floating-point-vectors:0032:0001">반정밀도 부동 소수점 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:floating-point-vectors:0033:0001"><a href="single-precision-floating-point-vectors.md">단정밀도 부동 소수점 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:floating-point-vectors:0034:0001">단정밀도 부동 소수점 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:floating-point-vectors:0035:0001"><a href="double-precision-floating-point-vectors.md">배정밀도 부동 소수점 벡터</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:floating-point-vectors:0036:0001">배정밀도 부동 소수점 요소를 포함하는 벡터에 대한 연산을 수행합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:matrices:0037:0001">Matrices</span>

- <span class="ko-segment" data-segment-id="seg:list:matrices:0038:0001"><a href="working-with-matrices.md">행렬 사용하기</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:matrices:0039:0001">공간에서 연립 방정식을 풀고 점을 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:matrices:0040:0001"><a href="half-precision-floating-point-matrices.md">반정밀도 부동 소수점 행렬</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:matrices:0041:0001">반정밀도 부동 소수점 요소를 포함하는 행렬에 대한 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:matrices:0042:0001"><a href="single-precision-floating-point-matrices.md">단정밀도 부동 소수점 행렬</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:matrices:0043:0001">단정밀도 부동 소수점 요소를 포함하는 행렬에 대한 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:matrices:0044:0001"><a href="double-precision-floating-point-matrices.md">배정밀도 부동 소수점 행렬</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:matrices:0045:0001">배정밀도 부동 소수점 요소를 포함하는 행렬에 대한 연산을 수행합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:quaternions:0046:0001">Quaternions</span>

- <span class="ko-segment" data-segment-id="seg:list:quaternions:0047:0001"><a href="working-with-quaternions.md">쿼터니언 사용하기</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:quaternions:0048:0001">구의 표면 주위를 따라 점을 회전하고, 점들 사이를 보간합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:quaternions:0049:0001"><a href="rotating-a-cube-by-transforming-its-vertices.md">정점 변환으로 큐브 회전하기</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:quaternions:0050:0001">쿼터니언 보간을 사용해 일련의 키프레임을 통해 큐브를 회전합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:quaternions:0051:0001"><a href="../simd/simd_quatf.md">struct simd_quatf</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:quaternions:0052:0001">단정밀도 쿼터니언입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:quaternions:0053:0001"><a href="../simd/simd_quatd.md">struct simd_quatd</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:quaternions:0054:0001">배정밀도 쿼터니언입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:constants:0055:0001">Constants</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0056:0001"><a href="../simd/simd_compiler_has_required_features.md">var SIMD_COMPILER_HAS_REQUIRED_FEATURES: Int32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:constants:0056:0002"><a href="../simd/simd_library_version.md">var SIMD_LIBRARY_VERSION: Int32</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:macros:0057:0001">Macros</span>

- <span class="ko-segment" data-segment-id="seg:list:macros:0058:0001"><a href="simd-macros.md">simd 매크로</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0059:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0060:0001"><a href="working-with-vectors.md">벡터 사용하기</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0061:0001">벡터를 사용해 기하학적 값을 계산하고, 점곱과 외적을 계산하며, 값 사이를 보간합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0062:0001"><a href="working-with-matrices.md">행렬 사용하기</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0063:0001">공간에서 연립 방정식을 풀고 점을 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0064:0001"><a href="working-with-quaternions.md">쿼터니언 사용하기</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0065:0001">구의 표면을 따라 점을 회전하고 점들 사이를 보간합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0066:0001"><a href="rotating-a-cube-by-transforming-its-vertices.md">Rotating a cube by transforming its vertices</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0067:0001">쿼터니언 보간을 사용해 일련의 키프레임 사이를 전환하면서 큐브를 회전합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0068:0001"><a href="vforce-library.md">vForce</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0069:0001">임의 길이의 벡터에서 초월 함수와 삼각 함수를 수행합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0071:0001">*<a href="https://developer.apple.com/documentation/accelerate/simd-library">View on Apple Developer</a>*</span>
