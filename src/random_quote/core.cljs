(ns random-quote.core
  (:require [ajax.core :refer [GET]]
            [reagent.core :as reagent :refer [atom]]))

(defonce app-state (atom {:text "Learn everyday"
                          :author "Roman Ostash"}))

(defn fetch-link! [state]
  (GET "https://quote-garden.herokuapp.com/quotes/random"
    {:handler (fn [data]
                (swap! state assoc :text (get data "quoteText"))
                (swap! state assoc :author (get data "quoteAuthor")))
     :error-handler (fn [{:keys [status status-text]}]
                      (js/console.log status status-text))}))

(defn get-tweet-link [state]
  (str "https://twitter.com/intent/tweet?hashtags=quote&text=" (:text @state) "-" (:author @state)))

(defn my-quote [state]
  [:div
   [:h1 "Random Quote Generator"]
   [:div.quote
    [:div.quote-container
     [:p.quote-content (:text @state)]
     [:p.quote-author (:author @state)]]
    [:div.quote-buttons
     [:a {:href (get-tweet-link state)
          :target "_blank"} "tweet"]
     [:button {:on-click #(fetch-link! state)} "next quote"]]]])

(defn start []
  (reagent/render-component [my-quote app-state]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))
