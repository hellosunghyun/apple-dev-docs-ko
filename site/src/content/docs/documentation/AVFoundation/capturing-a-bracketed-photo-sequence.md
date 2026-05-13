---
source_path: "documentation/AVFoundation/capturing-a-bracketed-photo-sequence.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/capturing-a-bracketed-photo-sequence"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:capturing-a-bracketed-photo-sequence:0000:0001">Capturing a bracketed photo sequence</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-a-bracketed-photo-sequence:0001:0001">**Framework**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-a-bracketed-photo-sequence:0002:0001">Capture several photos at once, varying parameters like exposure duration or light sensitivity.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">Bracketing is a well-known photographic technique in which a sequence of shots is rapidly taken of the same scene, usually varying only in a single parameter such as aperture or shutter speed (exposure length).</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">Experienced photographers use this technique to help them choose the best photos after shooting, or to apply offline post-processing that fuses multiple images together to create extended dynamic range or other special effects.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">In iOS, you can use <a href="avcapturephotooutput.md">@@TOKEN_0@@</a> and <a href="avcapturephotobracketsettings.md">@@TOKEN_1@@</a> to automatically capture a bracket of photos for each <a href="avcapturephotooutput/capturephoto(with:delegate:">@@TOKEN_2@@</a>.md) call.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0002">Once you’ve built a single-exposure camera in your app (see <a href="capturing-still-and-live-photos.md">@@TOKEN_0@@</a>), follow these steps to add multi-image bracket support.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:choose-bracket-settings:0006:0001">Choose Bracket Settings</span>

<span class="ko-segment" data-segment-id="seg:paragraph:choose-bracket-settings:0007:0001">You specify a multi-exposure bracket by providing an array of bracket settings obejcts. iOS offers two types of automatic bracketing:</span>

- <span class="ko-segment" data-segment-id="seg:list:choose-bracket-settings:0008:0001">Use <a href="avcaptureautoexposurebracketedstillimagesettings.md">@@TOKEN_0@@</a> to create a bracket that varies exposure-compensation values relative to automatic exposure.</span>
- <span class="ko-segment" data-segment-id="seg:list:choose-bracket-settings:0008:0002">Use <a href="avcapturemanualexposurebracketedstillimagesettings.md">@@TOKEN_0@@</a> to create a bracket with custom exposure durations and ISO sensitivity values for each photo in the bracket.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:choose-bracket-settings:0009:0001">To define a bracket, create an array of one of these types, with values that describe the settings variations you want to capture.</span> <span class="ko-segment" data-segment-id="seg:paragraph:choose-bracket-settings:0009:0002">For example, the code below defines a bracket that captures three images at three different exposure values.</span>

```swift
// Get AVCaptureBracketedStillImageSettings for a set of exposure values.
let exposureValues: [Float] = [-2, 0, +2]
let makeAutoExposureSettings = AVCaptureAutoExposureBracketedStillImageSettings.autoExposureSettings(exposureTargetBias:)
let exposureSettings = exposureValues.map(makeAutoExposureSettings)

```

> <span class="ko-segment" data-segment-id="seg:blockquote:choose-bracket-settings:0011:0001">💡 **Tip**: In Swift, you can easily convert an array of exposure values to an array of bracket settings by passing the appropriate initializer to the <code>map(_:)</code> function, as shown above.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:create-photo-settings-and-shoot:0012:0001">Create Photo Settings and Shoot</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-photo-settings-and-shoot:0013:0001">Instead of the <a href="avcapturephotosettings.md">@@TOKEN_0@@</a> object you create when shooting a single photo, to shoot a bracketed capture you’ll need an <a href="avcapturephotobracketsettings.md">@@TOKEN_1@@</a> object.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-photo-settings-and-shoot:0013:0002">This object combines the general settings that apply to all photos in the bracket with your bracket settings that specify how each photo differs from the rest of the bracket.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-photo-settings-and-shoot:0014:0001">As with single-image capture, you create a photo settings object by choosing the image codec and file format for the resulting photos, but you also provide the bracket settings you’ve chosen.</span>

```swift
// Create photo settings for HEIF/HEVC capture and no RAW output
// and enable cross-bracket image stabilization.
let photoSettings = AVCapturePhotoBracketSettings(rawPixelFormatType: 0,
    processedFormat: [AVVideoCodecKey : AVVideoCodecType.hevc],
    bracketedSettings: exposureSettings)
photoSettings.isLensStabilizationEnabled =
    self.photoOutput.isLensStabilizationDuringBracketedCaptureSupported

// Shoot the bracket, using a custom class to handle capture delegate callbacks.
let captureProcessor = PhotoCaptureProcessor()
self.photoOutput.capturePhoto(with: photoSettings, delegate: captureProcessor)

```

> <span class="ko-segment" data-segment-id="seg:blockquote:create-photo-settings-and-shoot:0016:0001">💡 **Tip**: Turning on <a href="avcapturephotobracketsettings/islensstabilizationenabled.md">@@TOKEN_0@@</a> (if supported) causes the camera to apply optical image stabilization (OIS) across the entire bracket, so that photos resulting from the bracket still line up with each other even if the device moves during capture.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:handle-bracketed-capture-results:0017:0001">Handle Bracketed Capture Results</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-bracketed-capture-results:0018:0001">The photo output calls your delegate’s <a href="avcapturephotocapturedelegate/photooutput(_:didfinishprocessingphoto:error:">@@TOKEN_0@@</a>.md) method at least once for each exposure in the bracket, and possibly additional times depending on your capture settings.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-bracketed-capture-results:0018:0002">For example, if you request RAW+HEIF capture in a three-exposure bracket, the photo output calls your delegate’s <code>didFinishProcessingPhoto</code> method six times (2 formats × 3 exposures), providing six <a href="avcapturephoto.md">@@TOKEN_1@@</a> objects.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-bracketed-capture-results:0019:0001">To keep track of multiple results, compare the <a href="avcapturephoto/photocount.md">@@TOKEN_0@@</a> from each photo to the <a href="avcaptureresolvedphotosettings/expectedphotocount.md">@@TOKEN_1@@</a> of your resolved settings.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-bracketed-capture-results:0019:0002">When those numbers are equal, you’ve received all results from the capture.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="capturing-photos-with-depth.md">Capturing photos with depth</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">동기화된 캡처로 수집한 비디오 또는 오디오 샘플을 위한 컨테이너입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="capturing-uncompressed-image-data.md">Capturing uncompressed image data</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">동기화된 캡처로 수집한 장면 깊이 정보용 컨테이너입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="capturing-thumbnail-and-preview-images.md">Capturing thumbnail and preview images</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">동기화된 캡처로 수집한 미디어 샘플의 추상 슈퍼클래스입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/avfoundation/capturing-a-bracketed-photo-sequence">View on Apple Developer</a>*</span>
