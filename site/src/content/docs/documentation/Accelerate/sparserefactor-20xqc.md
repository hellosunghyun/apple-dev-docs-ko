---
source_path: "documentation/Accelerate/sparserefactor-20xqc.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparserefactor-20xqc"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparserefactor:0000:0001">SparseRefactor(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparserefactor:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparserefactor:0002:0001">이 호출은 갱신된 옵션을 사용하고 내부 할당 없이 제공된 복소수 배정밀도 행렬의 새로운 인수분해를 계산하기 위해 제공된 인수분해 객체의 저장소를 재사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparserefactor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseRefactor(_ Matrix: SparseMatrix_Complex_Double, _ Factored: UnsafeMutablePointer<SparseOpaqueFactorization_Complex_Double>, _ nfoptions: SparseNumericFactorOptions, _ workspace: UnsafeMutableRawPointer)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>Matrix</code>는 원래의 인수분해에 사용한 것과 동일한 non-zero 구조를 가져야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 호출은 <code>SparseFactor</code>에 <code>factorStorage</code> 인수로 전달된 명시적 저장소를 재사용해 얻을 수 있는 동작과 매우 유사한 동작을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">또한 단순화된 호출 시퀀스를 제공할 뿐만 아니라, 지연 피벗을 처리하기 위해 할당된 추가 저장소도 재사용할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">지연된 피벗이 발생하는 피벗드 인수분해의 경우 내부 메모리 할당이 발생할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">메모리 할당을 더 엄격하게 제어해야 하면, 필요한 동작을 구현하는 <code>sfoptions.malloc</code> 함수를 제공하거나 대체 비피벗 인수분해 반환값을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003"><code>sfoptions.malloc</code>이 NULL을 반환하면 인수분해가 즉시 중단됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">기본 객체의 참조 카운트가 정확히 1이 아닌 경우(예: <code>SparseGetTranspose</code> 또는 <code>SparseCreateSubfactor()</code> 호출로 인해 생성된 암시적 복사본이 <code>SparseCleanup</code> 호출로 파괴되지 않은 경우), 새 저장소가 무조건 할당됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>Matrix</code>: 인수분해할 행렬입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>nfoptions</code>: 수치 인수분해 옵션입니다. 예를 들어 피벗 매개변수가 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>workspace</code>: 최소 <code>Factorization-&gt;symbolicFactorization.workspaceSize_Double * 2</code>바이트 크기의 작업 공간 포인터입니다. 이 메모리는 16바이트 정렬이어야 합니다( <code>malloc</code>에서 반환된 할당은 모두 이 속성을 가집니다). 이 작업 공간은 함수가 반환되면 즉시 사용자가 재사용하거나 소멸시킬 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="sparserefactor(_:_:_:">func SparseRefactor(SparseMatrix_Double, UnsafeMutablePointer&lt;SparseOpaqueFactorization_Double&gt;, UnsafeMutableRawPointer)</a>-9mqeq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">기존 인수분해의 저장소를 사용해 지정된 배정밀도 행렬의 인수분해를 내부 메모리 할당 없이 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="sparserefactor(_:_:_:">func SparseRefactor(SparseMatrix_Float, UnsafeMutablePointer&lt;SparseOpaqueFactorization_Float&gt;, UnsafeMutableRawPointer)</a>-2dqt8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">기존 인수분해의 저장소를 사용해 지정된 단정밀도 행렬의 인수분해를 수행하며, 내부 메모리 할당을 하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparserefactor(_:_:_:_:">func SparseRefactor(SparseMatrix_Double, UnsafeMutablePointer&lt;SparseOpaqueFactorization_Double&gt;, SparseNumericFactorOptions, UnsafeMutableRawPointer)</a>-59ehf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">기존 인수분해의 저장소 및 지정된 옵션을 사용해 지정된 배정밀도 행렬의 인수분해를 수행하며 내부 메모리 할당을 하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="sparserefactor(_:_:_:_:">func SparseRefactor(SparseMatrix_Float, UnsafeMutablePointer&lt;SparseOpaqueFactorization_Float&gt;, SparseNumericFactorOptions, UnsafeMutableRawPointer)</a>-8i8vi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">기존 인수분해의 저장소 및 지정된 옵션을 사용해 지정된 단정밀도 행렬의 인수분해를 수행하며 내부 메모리 할당을 하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="sparserefactor(_:_:_:">func SparseRefactor(SparseMatrix_Complex_Float, UnsafeMutablePointer&lt;SparseOpaqueFactorization_Complex_Float&gt;, UnsafeMutableRawPointer)</a>-4ofvz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">제공된 인수분해 객체의 저장소를 재사용해 제공된 복소수 단정밀도 값 행렬의 새 인수분해를 계산하며 내부 할당을 수행하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="sparserefactor(_:_:_:">func SparseRefactor(SparseMatrix_Complex_Double, UnsafeMutablePointer&lt;SparseOpaqueFactorization_Complex_Double&gt;, UnsafeMutableRawPointer)</a>-593yb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">제공된 인수분해 객체의 저장소를 재사용해 제공된 복소수 배정밀도 값 행렬의 새 인수분해를 계산하며 내부 할당을 수행하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="sparserefactor(_:_:_:_:">func SparseRefactor(SparseMatrix_Complex_Float, UnsafeMutablePointer&lt;SparseOpaqueFactorization_Complex_Float&gt;, SparseNumericFactorOptions, UnsafeMutableRawPointer)</a>-201rh.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">제공된 인수분해 객체의 저장소를 재사용해 제공된 복소수 단정밀도 값 행렬의 새 인수분해를 계산하며 업데이트된 옵션을 적용하고 내부 할당을 수행하지 않습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparserefactor(_:_:_:_:">Apple Developer에서 보기</a>-20xqc)*</span>
