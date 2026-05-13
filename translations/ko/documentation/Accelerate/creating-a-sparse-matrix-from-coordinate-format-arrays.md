---
source_path: "documentation/Accelerate/creating-a-sparse-matrix-from-coordinate-format-arrays.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/creating-a-sparse-matrix-from-coordinate-format-arrays"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:creating-a-sparse-matrix-from-coordinate-format-arrays:0000:0001">좌표 형식 배열로 희소 행렬 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-sparse-matrix-from-coordinate-format-arrays:0001:0001">**프레임워크**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-sparse-matrix-from-coordinate-format-arrays:0002:0001">희소 행렬을 생성하려면 별도의 좌표 형식 배열을 사용합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">일부 경우(예: 파일에서 행렬 값을 읽는 경우)에는 좌표 형식 배열을 사용해 희소 행렬 객체를 만드는 것이 더 쉬울 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">이 방식에는 세 개의 개별 배열이 필요합니다. 첫 번째 배열은 열 인덱스를, 두 번째는 행 인덱스를, 세 번째는 행렬 값을 각각 담습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0003">각 배열은 동일한 개수의 요소를 포함합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:create-the-sparse-matrix:0005:0001">희소 행렬 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-sparse-matrix:0006:0001">다음은 대칭 희소 행렬의 예입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-sparse-matrix:0007:0001">!<a href="https://docs-assets.developer.apple.com/published/f6bec6052ca56a095367a459900564f8/media-2887076%402x.png">빈 칸이 네 개 있는 4×4 대칭 희소 행렬.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-sparse-matrix:0008:0001">이 희소 행렬은 대칭이므로 아래 하삼각을 설명하는 배열로 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-the-sparse-matrix:0008:0002">예를 들어 값 <code>9.5</code>는 2행 2열에 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-sparse-matrix:0009:0001">**Swift**:</span>

```swift
row =      [ 0,   1,   3,    1,    2,   3,   2,   3]
column =   [ 0,   0,   0,    1,    1,   1,   2,   3]
values =   [10.0, 1.0, 2.5, 12.0, -0.3, 1.1, 9.5, 6.0] 
```

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-sparse-matrix:0011:0001">**Objective-C**:</span>

```objc
int row[] =       { 0,   1,   3,    1,    2,   3,   2,   3};
int column[] =    { 0,   0,   0,    1,    1,   1,   2,   3};
double values[] = {10.0, 1.0, 2.5, 12.0, -0.3, 1.1, 9.5, 6.0};
```

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-sparse-matrix:0013:0001">행렬이 대칭임을 지정하고 <code>values</code> 배열의 항목이 하삼각에서 유래함을 지정하려면 <code>attributes</code> 매개변수를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-sparse-matrix:0014:0001">다음 코드는 속성을 정의하고 희소 행렬 인스턴스를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-sparse-matrix:0015:0001">**Swift**:</span>

```swift
var attributes = SparseAttributes_t()
attributes.triangle = SparseLowerTriangle
attributes.kind = SparseSymmetric  
 
var row: [Int32] =      [ 0,   1,   3,    1,    2,   3,   2,   3]
var column: [Int32] =   [ 0,   0,   0,    1,    1,   1,   2,   3]
var values =            [10.0, 1.0, 2.5, 12.0, -0.3, 1.1, 9.5, 6.0] 
         
let blockCount = 8
let blockSize = 1
 
let A = SparseConvertFromCoordinate(4, 4,
                                    blockCount, UInt8(blockSize),
                                    attributes,
                                    &row, &column,
                                    &values)
```

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-sparse-matrix:0017:0001">**Objective-C**:</span>

```objc
SparseAttributes_t attributes = {
    .triangle = SparseLowerTriangle,
    .kind = SparseSymmetric
};
 
int row[] =       { 0,   1,   3,    1,    2,   3,   2,   3};
int column[] =    { 0,   0,   0,    1,    1,   1,   2,   3};
double values[] = {10.0, 1.0, 2.5, 12.0, -0.3, 1.1, 9.5, 6.0};
 
long blockCount = 8;
UInt8 blockSize = 1;
 
SparseMatrix_Double A = SparseConvertFromCoordinate(4, 4,
                                                    blockCount, blockSize,
                                                    attributes,
                                                    row, column,
                                                    values);
```

##### <span class="ko-segment" data-segment-id="seg:heading:manage-invalid-and-duplicate-entries:0019:0001">유효하지 않은 항목과 중복 항목 관리</span>

<span class="ko-segment" data-segment-id="seg:paragraph:manage-invalid-and-duplicate-entries:0020:0001">좌표 <code>(row[i], column[i])</code>가 유효하지 않아, 즉 다음 중 하나라도 해당하면 시스템은 블록 요소를 무시하고 반환 행렬에 포함하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:manage-invalid-and-duplicate-entries:0021:0001"><code>0..&lt;rowCount</code> 또는 <code>0..&lt;columnCount</code> 범위를 각각 벗어나는 경우입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:manage-invalid-and-duplicate-entries:0021:0002"><a href="sparseattributes_t/kind.md">@@TOKEN_0@@</a> 가 <a href="sparsetriangular.md">@@TOKEN_1@@</a> 또는 <a href="sparseunittriangular.md">@@TOKEN_2@@</a> 이고 좌표가 잘못된 삼각형에 있는 경우.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:manage-invalid-and-duplicate-entries:0022:0001"><a href="sparseattributes_t/kind.md">@@TOKEN_0@@</a>가 <a href="sparsesymmetric.md">@@TOKEN_1@@</a>이면 시스템은 잘못된 삼각형에 있는 항목을 전치하고, 해당 항목이 존재하면 <code>(column[i], row[i])</code>의 블록에 합산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:manage-invalid-and-duplicate-entries:0023:0001">시스템은 중복 좌표를 가진 요소를 합산하고 단일 항목으로 대체합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:manage-invalid-and-duplicate-entries:0024:0001">좌표 변환 함수는 <code>blockSize</code>가 1보다 큰 블록 행렬을 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:manage-invalid-and-duplicate-entries:0024:0002">설명된 행렬은 <code>rowCount * blockSize</code> 행과 <code>columnCount * blockSize</code> 열을 갖습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:manage-invalid-and-duplicate-entries:0024:0003">각 <code>i in 0..&lt;blockCount</code>에 대해 <code>data[i * blockSize * blockSize:(i + 1) * blockSize * blockSize - 1]</code> 값이 있는 구조적으로 영이 아닌 블록이 블록 위치 <code>(row[i], column[i])</code>에 존재합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:manage-invalid-and-duplicate-entries:0024:0004">시스템은 블록의 값을 <code>blockSize</code> 행과 열을 갖는 밀집 열 우선 행렬의 요소로 해석합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:supply-a-user-defined-workspace:0025:0001">사용자 정의 워크스페이스 제공</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supply-a-user-defined-workspace:0026:0001">각 변환기에는 두 가지 변형이 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:supply-a-user-defined-workspace:0026:0002">다음 함수들은 반환되는 행렬에 대한 저장소를 내부적으로 할당하고 반환될 행렬에 대한 공간을 할당합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:supply-a-user-defined-workspace:0027:0001"><a href="sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:">@@TOKEN_0@@</a>-4n2th.md) for real single-precision values</span>
- <span class="ko-segment" data-segment-id="seg:list:supply-a-user-defined-workspace:0027:0002"><a href="sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:">@@TOKEN_0@@</a>-4n2el.md) for real double-precision values</span>
- <span class="ko-segment" data-segment-id="seg:list:supply-a-user-defined-workspace:0027:0003"><a href="sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:">@@TOKEN_0@@</a>-58lgv.md) for complex single-precision values</span>
- <span class="ko-segment" data-segment-id="seg:list:supply-a-user-defined-workspace:0027:0004"><a href="sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:">@@TOKEN_0@@</a>-58kub.md) for complex double-precision values</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supply-a-user-defined-workspace:0028:0001">다음 함수들은 반환되는 행렬에 대한 사전 할당된 저장소와 할당을 정밀하게 제어하기 위한 별도 워크스페이스를 요구합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:supply-a-user-defined-workspace:0029:0001"><a href="sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:_:_:">@@TOKEN_0@@</a>-84plp.md) for real single-precision values</span>
- <span class="ko-segment" data-segment-id="seg:list:supply-a-user-defined-workspace:0029:0002"><a href="sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:_:_:">@@TOKEN_0@@</a>-56hv8.md) 실수 배정밀도 값용</span>
- <span class="ko-segment" data-segment-id="seg:list:supply-a-user-defined-workspace:0029:0003"><a href="sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:_:_:">@@TOKEN_0@@</a>-2blwb.md) 복소수 단정밀도 값용</span>
- <span class="ko-segment" data-segment-id="seg:list:supply-a-user-defined-workspace:0029:0004"><a href="sparseconvertfromcoordinate(_:_:_:_:_:_:_:_:_:_:">@@TOKEN_0@@</a>-6ocm1.md) 복소수 배정밀도 값용</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0030:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="creating-sparse-matrices.md">Creating sparse matrices</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">인수분해 및 시스템 해결을 위해 희소 행렬을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="solving-systems-using-direct-methods.md">Solving systems using direct methods</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">계수 행렬이 희소한 연립방정식은 직접 방법을 사용해 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="solving-systems-using-iterative-methods.md">Solving systems using iterative methods</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">계수 행렬이 희소한 연립방정식은 반복 방법으로 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="sparse-solvers-library.md">Sparse Solvers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">계수 행렬이 희소한 연립방정식을 풉니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">*<a href="https://developer.apple.com/documentation/accelerate/creating-a-sparse-matrix-from-coordinate-format-arrays">View on Apple Developer</a>*</span>
