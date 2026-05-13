---
source_path: "documentation/Accelerate/vdsp-dft-interleaved-destroysetupd.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp-dft-interleaved-destroysetupd"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vdspdftinterleaveddestroysetupd:0000:0001">vDSP_DFT_Interleaved_DestroySetupD(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdspdftinterleaveddestroysetupd:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdspdftinterleaveddestroysetupd:0002:0001">Releases a double-precision discrete Fourier transform (DFT) setup structure.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdspdftinterleaveddestroysetupd:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vdspdftinterleaveddestroysetupd:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspdftinterleaveddestroysetupd:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspdftinterleaveddestroysetupd:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspdftinterleaveddestroysetupd:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspdftinterleaveddestroysetupd:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspdftinterleaveddestroysetupd:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspdftinterleaveddestroysetupd:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vDSP_DFT_Interleaved_DestroySetupD(_ Setup: vDSP_DFT_Interleaved_SetupD?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">❗ **Important**: This function isn’t fully thread-safe.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0002">Don’t call this function concurrently with any function that uses or shares its underlying storage with the setup structure.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>Setup</code>: The setup structure to destroy.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerviewcontrollerdelegate/playerviewcontroller(_:restoreuserinterfaceforfullscreenexitwithcompletionhandler:">func playerViewController(AVPlayerViewController, restoreUserInterfaceForFullScreenExitWithCompletionHandler: (Bool) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Optimize discrete Fourier transform (DFT) performance with the vDSP interleaved DFT routines.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vdsp_dft_interleaved_createsetup(_:_:_:_:">func vDSP_DFT_Interleaved_CreateSetup(vDSP_DFT_Interleaved_Setup?, vDSP_Length, vDSP_DFT_Direction, vDSP_DFT_RealtoComplex) -&gt; vDSP_DFT_Interleaved_Setup?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Returns a setup structure that contains precalculated data for forward and inverse, single-precision interleaved discrete Fourier transform (DFT) functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vdsp_dft_interleaved_createsetupd(_:_:_:_:">func vDSP_DFT_Interleaved_CreateSetupD(vDSP_DFT_Interleaved_SetupD?, vDSP_Length, vDSP_DFT_Direction, vDSP_DFT_RealtoComplex) -&gt; vDSP_DFT_Interleaved_SetupD?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns a setup structure that contains precalculated data for forward and inverse, double-precision interleaved discrete Fourier transform (DFT) functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vdsp_dft_interleaved_execute(_:_:_:">func vDSP_DFT_Interleaved_Execute(vDSP_DFT_Interleaved_Setup, UnsafePointer&lt;DSPComplex&gt;, UnsafeMutablePointer&lt;DSPComplex&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Calculates the single-precision discrete Fourier transform (DFT) for a vector of interleaved complex values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vdsp_dft_interleaved_executed(_:_:_:">func vDSP_DFT_Interleaved_ExecuteD(vDSP_DFT_Interleaved_SetupD, UnsafePointer&lt;DSPDoubleComplex&gt;, UnsafeMutablePointer&lt;DSPDoubleComplex&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Calculates the double-precision discrete Fourier transform (DFT) for a vector of interleaved complex values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vdsp_dft_interleaved_destroysetup(_:">func vDSP_DFT_Interleaved_DestroySetup(vDSP_DFT_Interleaved_Setup?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Releases a single-precision discrete Fourier transform (DFT) setup structure.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp_dft_interleaved_destroysetupd(_:">View on Apple Developer</a>)*</span>
