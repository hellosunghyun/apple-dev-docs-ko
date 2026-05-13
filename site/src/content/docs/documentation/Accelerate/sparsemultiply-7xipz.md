---
source_path: "documentation/Accelerate/sparsemultiply-7xipz.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsemultiply-7xipz"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsemultiply:0000:0001">SparseMultiply(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiply:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiply:0002:0001">Perform the multiply operation <code>y = Subfactor * x</code> for complex double values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiply:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Complex_Double, _ X: DenseVector_Complex_Double, _ Y: DenseVector_Complex_Double, _ workspace: UnsafeMutableRawPointer)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>Subfactor</code>: (Input) The subfactor to multiply by, as returned by <code>SparseCreateSubfactor()</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>workspace</code>: (Scratch) A workspace of size <code>Subfactor.workspaceRequiredStatic + 1*Subfactor.workspaceRequiredPerRHS * 2</code>. This memory must be 16-byte aligned (any allocation returned by <code>malloc()</code> has this property).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturereactiontype/confetti.md">static let confetti: AVCaptureReactionType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">에셋 리더의 상태가 알 수 없는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturereactiontype/fireworks.md">func setPrimaryConstituentDeviceSwitchingBehavior(AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior, restrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Performs the multiply operation *Y = Subfactor * X* on a vector of single-precision values *X*, in place and without any internal memory allocations.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturereactiontype/heart.md">static let heart: AVCaptureReactionType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Performs the multiply operation *Y = Subfactor * X* on a vector of double-precision values *X*, without any internal memory allocations.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturereactiontype/lasers.md">static let lasers: AVCaptureReactionType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Performs the multiply operation *Y = Subfactor * X* on a vector of double-precision values *X*, without any internal memory allocations.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturereactiontype/rain.md">static let rain: AVCaptureReactionType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">어둡고 폭풍우가 치는 밤을 표시하는 반응입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avpartialasyncproperty/preferredrate.md">static let thumbsUp: AVCaptureReactionType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">엄지손가락 위로 기호를 표시하는 반응입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avpartialasyncproperty/preferredvolume-20mb3.md">static var preferredVolume: AVAsyncProperty&lt;Root, Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">자산의 청취 가능한 미디어 재생 볼륨 선호도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avpartialasyncproperty/preferredtransform-80d13.md">static var preferredTransform: AVAsyncProperty&lt;Root, CGAffineTransform&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">표시 또는 처리 중 시각 콘텐츠에 적용할 자산의 변환 선호도입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">콘텐츠 최적 재생을 위한 자산의 표시 모드 선호도입니다.</span>
